import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SoilHumiditySensorIcon from '../icons/soilHumiditySensor';
import { Typography } from '@material-ui/core';
import { height } from '@material-ui/system';
import { number } from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { auth, firebase } from '../firebase/index';

export default function ProfileEditForm(props: { open: boolean; handleClose: () => void }) {
  const [username, setUsername] = useState<string>();
  const [theme, setTheme] = useState<number>();

  const usernameData = firebase.database().ref(`/users/${auth.currentUser?.uid}/profile/username`);
  const themeData = firebase.database().ref(`/users/${auth.currentUser?.uid}/profile/theme`);

  const [usernameToChange, setUsernameToChange] = useState<string>();
  const [themeToChange, setThemeToChange] = useState<number>();

  useEffect(() => {
    usernameData.on('value', (data) => {
      setUsername(data.val());
    });

    themeData.on('value', (data) => {
      setTheme(data.val());
    });

    return () => {
      usernameData.off('value');
      themeData.off('value');
    };
  }, []);

  function saveChanges() {
    if (usernameToChange) {
      usernameData.set(usernameToChange);
      setUsernameToChange(undefined);
    }

    if (themeToChange === 0 || themeToChange) {
      themeData.set(themeToChange);
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
          <DialogContentText style={{ textAlign: 'center', paddingTop: '1rem' }}></DialogContentText>
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
