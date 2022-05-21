import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
    <Container maxWidth="xl">
      <Navbar />
      <Switch>
        <Route path="/" exact component={()=> <Redirect to="/posts"/>} />
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" component={PostDetails} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
      
    </Container>
    
  </BrowserRouter>
)
  
export default App;
