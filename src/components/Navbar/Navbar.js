import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./Styles";
import logo from "../../images/logo.png";
import { Link, useHistory , useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("Profile")));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location= useLocation();
  // console.log(user)

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };


  useEffect(() => {
    
   const token = user?.token

   if(token){
     const decodedToken= decode(token)
    // token expire horha ya nh agr horha tw gud he nhhorha tw phr eslint logout issuehe

     if(decodedToken.exp * 1000 < new Date().getTime()) 
     logout()
   }

   setUser(JSON.parse(localStorage.getItem('Profile')))
   // eslint-disable-next-line
  }, [location])

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={classes.image} src={logo} alt="logo" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
