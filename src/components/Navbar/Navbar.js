import React from "react";
import { AppBar, Typography ,Toolbar, Button} from "@material-ui/core";
import useStyles from "./Styles";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography container={Link} to="/" className={classes.header} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={logo} alt="logo" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
          {user ? (
              <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                  <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
              </div>

          )  : (
            <Button container={Link} to="/auth" variant="contained" color="primary">Sign in</Button>

          )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;