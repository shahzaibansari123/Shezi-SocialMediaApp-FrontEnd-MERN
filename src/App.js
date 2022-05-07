import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./images/logo.png";
import Form from "./components/Form/Form"
import Posts from './components/Posts/Posts'
import useStyles from './Styles'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'

const App = () => {
  const [currentId, setCurrentId] =useState(null)
  const classes=useStyles()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId,dispatch])
  
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.header} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={logo} alt="logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
