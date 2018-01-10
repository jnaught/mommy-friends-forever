import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Login} path="/Login" />
  </Switch>
);
