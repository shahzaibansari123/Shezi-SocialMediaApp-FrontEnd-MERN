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
                <Grid xs={6} md={12}>
                  <TextField
                    name="firstname"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    xs={6}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
