import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Login} path="/Login" />
    <Route component={Dashboard} path="/Dashboard" />
  </Switch>
);
