import React from "react";
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

const Auth = () => {
  const classes = useStyles();
  const isSignup = false;

  const handleSubmit = () => {};

  const handleChange = () => {};

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
               
                  <TextField name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                  <TextField name="firstname" label="First Name" handleChange={handleChange} half />
               
              </>
            )}

            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
