import { Container, TextField, Grid, Paper, Button, Typography, Fab } from '@material-ui/core';
import { useRouter } from 'next/router';
import { authInstance } from '../firebase/index';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IPageProps from '../interfaces/IPageProps';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: '1rem',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

function Login(props: IPageProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [missingError, setMissingError] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);

  const classes = useStyles();
  const router = useRouter();

  const handleSignIn = () => {
    onAuthStateChanged(authInstance, (authUser) => {
      if (authUser) {
        router.push('/');
      }
    });
    signInWithEmailAndPassword(authInstance, username, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      setLoginError(true);
    });
    /*var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.signInWithPopup(provider)
            .then(() => {
                alert('You are signed In');
                router.push('/');
            })
            .catch(err => {
                alert('OOps something went wrong check your console');
                console.log(err);
            });*/
  };

  const submitForm = () => {
    setLoginError(false);
    setMissingError(false);
    if (!username || !password) {
      setMissingError(true);
    } else {
      handleSignIn();
    }
  };

  // @ts-ignore
  return (
    <div>
      <Grid
        container
        direction={'row'}
        justify={'center'}
        alignItems={'center'}
        style={{ minHeight: '100vh', position: 'absolute' }}
      >
        <Container maxWidth="xs">
          <Paper
            className={
              // @ts-ignore
              classes.paper
            }
          >
            <form
              method={'post'}
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >
              <Grid container direction={'column'} justify={'center'} alignItems={'center'} spacing={2}>
                <Typography className={classes.header} variant="h4">
                  Login
                </Typography>
                <Grid item>
                  <TextField
                    error={(!username && missingError) || loginError}
                    fullWidth
                    helperText={!username && missingError ? 'required' : null}
                    variant="outlined"
                    label="Email"
                    type="text"
                    onChange={(e) => {
                      // @ts-ignore
                      setUsername(e.target.value);
                    }}
                    name={'username'}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    error={(!password && missingError) || loginError}
                    fullWidth
                    helperText={!password && missingError ? 'required' : null}
                    variant="outlined"
                    label="Password"
                    type="password"
                    onChange={(e) => {
                      // @ts-ignore
                      setPassword(e.target.value);
                    }}
                    name={'password'}
                  />
                </Grid>
                <Grid item>
                  <input style={{ display: 'none' }} id={'submit-btn'} type={'submit'}></input>
                  <label htmlFor="submit-btn">
                    <Button variant={'contained'} color={'primary'} component="span">
                      Login
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </form>
          </Paper>

          <Fab
            onClick={() => {
              router.back();
            }}
            variant="extended"
            color={'secondary'}
            className={classes.fab}
          >
            <ArrowBackIcon />
            Back to app
          </Fab>
        </Container>
      </Grid>
    </div>
  );
}

/*Login.getInitialProps = ({query}:NextApiRequest) => {
    return{query:query}
}*/

export default Login;
