import React, {useEffect} from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
// import { gapi } from 'gapi-script'

// const  clientId="950985589941-o8vpbhui0djnh3fh7eolricd1lad942f.apps.googleusercontent.com"

const App = () => (

  // useEffect(() => {
  //  function start() {
  //    gapi.client.init({
  //      clientId: clientId,
  //      scope: ""
  //    })
  //  } 
  //  gapi.load('client:auth2' , start);
  // })
  // return (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
      
    </Container>
    
  </BrowserRouter>
)
  
export default App;
