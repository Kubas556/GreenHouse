import {Container,TextField,Grid,Paper,Button,Typography,Fab}  from '@material-ui/core';
import { useRouter } from 'next/router'
import Link from 'next/link'
import {auth,firebase} from '../firebase/index';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState, useEffect, useRef} from "react";
import fetch from "node-fetch";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {error} from "next/dist/build/output/log";

const useStyles = makeStyles(theme => ({
    header:{
      paddingTop:'1rem'
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    }
}));

function Login(props) {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const [missingError,setMissingError] = useState(false);
    const [loginError,setLoginError] = useState(false);

    const classes = useStyles();
    const router = useRouter();

    useEffect(()=>{
        /*if(props.session!==null && props.query.refresh!=='false')
            router.back();*/
    },[props.session]);

    useEffect(()=>{
        props.setThemeBtn(false);

        return () => {
            props.setThemeBtn(true);
        }
    },[]);

    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.signInWithPopup(provider)
            .then(() => {
                alert('You are signed In');
            })
            .catch(err => {
                alert('OOps something went wrong check your console');
                console.log(err);
            });
    };

    function checkStatus(res) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            if(res.status===401)
                setLoginError(true);

            throw error(res.status);
        }
    }


    const submitForm = () =>{
        handleSignIn();
        /*setLoginError(false);
        setMissingError(false);
        if(!username||!password) {
            setMissingError(true);
        } else {
            fetch("http://a2017sedlja.delta-studenti.cz/projektAPI/validate.php", {method:"POST",headers:{USERNAME: username,PASSWORD: password}}).then(checkStatus).then(r=>r.json()).then(j => {
                if(j.error) {
                    cosnole.log(j.error);
                } else {
                    props.changeSess({
                        session:j[0],
                        edit:j[1]
                    });
                    router.push('/');
                }
            });
        }*/
    }

    return (
        <div>
            <Grid container direction={"row"} justify={"center"} alignItems={"center"} style={{minHeight:'100vh',position:'absolute'}}>
                <Container maxWidth="xs">
                    <Paper className={classes.paper}>
                        <form method={"post"} onSubmit={e => {
                            e.preventDefault();
                            submitForm();
                        }}>
                            <Grid container direction={"column"} justify={"center"} alignItems={"center"} spacing={2}>
                                <Typography className={classes.header} variant="h4">
                                    Login
                                </Typography>
                                <Grid item>
                                <TextField
                                    error={(!username&&missingError)||loginError}
                                    fullWidth
                                    helperText={!username&&missingError?"required":null}
                                    variant="outlined"
                                    label="Username"
                                    type="text"
                                    onChange={e => {
                                        setUsername(e.target.value)
                                    }}
                                    name={"username"}
                                />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        error={(!password&&missingError)||loginError}
                                        fullWidth
                                        helperText={!password&&missingError?"required":null}
                                        variant="outlined"
                                        label="Password"
                                        type="password"
                                        onChange={e => {
                                            setPassword(e.target.value)
                                        }}
                                        name={"password"}
                                    />
                                </Grid>
                                <Grid item>
                                <input style={{display:"none"}} id={"submit-btn"} type={"submit"}></input>
                                <label htmlFor="submit-btn">
                                    <Button variant={"contained"} color={"primary"} component="span">Login</Button>
                                </label>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                    { props.session!==null?
                        (<Fab onClick={()=>{router.back()}} variant="extended" color={"secondary"} className={classes.fab}>
                        <ArrowBackIcon/>
                        Back to app
                    </Fab>):null}
                </Container>
            </Grid>
        </div>
    );
}

Login.getInitialProps = ({query}) => {
    return{query:query}
}

export default Login;