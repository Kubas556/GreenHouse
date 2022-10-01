import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ref, child, get, push, off, set } from 'firebase/database';
import { getToken } from 'firebase/messaging';
import MenuItem from '@material-ui/core/MenuItem';
import { authInstance, database, messaging } from '../firebase/index';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function ProfileEditForm(props: { open: boolean; handleClose: () => void }) {
  const [username, setUsername] = useState<string>();
  const [theme, setTheme] = useState<number>();

  const usernameData = ref(database, `/users/${authInstance.currentUser?.uid}/profile/username`);
  const themeData = ref(database, `/users/${authInstance.currentUser?.uid}/profile/theme`);
  const userNotificationTokens = child(
    ref(database, `/users/${authInstance.currentUser?.uid}/profile/`),
    'notificationTokens'
  );

  const [usernameToChange, setUsernameToChange] = useState<string>();
  const [themeToChange, setThemeToChange] = useState<number>();

  const requestNotificationsPermission = async () => {
    if (messaging === undefined) return;

    try {
      //await messaging.requestPermission();
      const access = await Notification.requestPermission();
      if (access !== 'granted') throw 'access denied';

      const token = await getToken(messaging);
      console.log('got token:', token);
      get(userNotificationTokens).then((data) => {
        if (data.val()) {
          if (!(Object.values(data.val()).indexOf(token) > -1)) {
            push(userNotificationTokens, token);
          }
        } else {
          push(userNotificationTokens, token);
        }
      });
      return token;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    get(usernameData).then((data) => {
      setUsername(data.val());
    });

    get(themeData).then((data) => {
      setTheme(data.val());
    });

    return () => {
      off(usernameData, 'value');
      off(themeData, 'value');
    };
  }, []);

  function saveChanges() {
    if (usernameToChange) {
      set(usernameData, usernameToChange);
      setUsernameToChange(undefined);
    }

    if (themeToChange === 0 || themeToChange) {
      set(themeData, themeToChange);
      setThemeToChange(undefined);
    }
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="soil-analog-config-form-dialog">
        <DialogTitle id="form-dialog-title">Nastavení Profilu</DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={username}
            margin="dense"
            id="username"
            label="Username"
            type="text"
            onChange={(e) => {
              setUsernameToChange(e.target.value);
            }}
            fullWidth
          />
          <TextField
            select
            margin="dense"
            id="theme"
            label="Theme"
            type="number"
            defaultValue={theme}
            onChange={(e) => {
              setThemeToChange(parseInt(e.target.value));
            }}
            fullWidth
          >
            <MenuItem key={1} value={1}>
              Dark
            </MenuItem>
            <MenuItem key={0} value={0}>
              Light
            </MenuItem>
          </TextField>
          <DialogContentText style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <Button
              endIcon={<NotificationsIcon />}
              variant="contained"
              color="primary"
              disabled={!messaging}
              onClick={requestNotificationsPermission}
              aria-label="notifications"
            >
              Enable notifications
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              saveChanges();
              props.handleClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
