import React from "react";
import "./App.css";
import SavedList from "./pages/Saved"
import Search from "./pages/Search"
import Wrapper from "./components/Wrapper"
import Nav from "./components/navbar"
import Jumbo from "./components/jumbotron"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App () {
return (
<Router>
<div>
  <Wrapper>
  <Nav />
  <Jumbo/>
  <Switch>
  <Route exact path ={["/", "/search"]}>
    <Search/>
  </Route>
  <Route exact path ={["/saved"]}>
    <SavedList/>
  </Route>
  </Switch>
  
  </Wrapper>
</div>
</Router>
)
  
}


export default App;
