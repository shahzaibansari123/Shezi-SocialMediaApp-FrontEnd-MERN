import React, {useState, useEffect} from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Avatar,
} from "@material-ui/core";
import useStyles from "./Styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from './Input'
import GoogleLogin from "react-google-login";
import Icon from './Icon'
import { useDispatch } from 'react-redux'
import { gapi } from 'gapi-script'
import {useHistory} from 'react-router-dom'

const  clientId="950985589941-o8vpbhui0djnh3fh7eolricd1lad942f.apps.googleusercontent.com"

const Auth = () => {
  const history=useHistory()
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup,setIsSignup] = useState(false)
  const dispatch=useDispatch()

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: " "
      })
    } 
    gapi.load('client:auth2' , start);
   })

  //jb state change krty old state use krke tw call back use krty hein jese k nchy line me horha
  const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((prevIsSignup)=> !prevIsSignup)
    handleShowPassword(false)
  };

  const googleSuccess = async (res) => {
    const result= res?.profileObj
    const token= res?.tokenId

    try {
      dispatch({type: 'AUTH' , data: {result, token}})
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  };

  const googleFailure =  (error) => {
    console.log(error)
    console.log("Google Sign In was Unsuccessful. Try Again Later !")
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                  <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastname" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
            <Input name="password" label="Password" handleChange={handleChange} type={ showPassword ? "text": "password"} handleShowPassword={handleShowPassword} />
          {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <Button type="submit" color="primary" fullWidth variant="contained" className={classes.submit}>
             {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin 
          clientId={clientId}
          plugin_name= "SocialMediaApp"
          render={(renderProps)=>( 
            <Button 
                  className={classes.googleButton} 
                  color="primary" 
                  fullWidth 
                  onClick={renderProps.onClick} 
                  disabled={renderProps.disabled} 
                  startIcon={<Icon />} 
                  variant="contained">
                    Google Sign In
                  </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure} 
          cookiePolicy={'single_host_origin'}
       
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an Account? Sign In' : "Don't have an Account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
