import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import UserPosts from "./Components/UserPosts/UserPosts";
import allPosts from "./Components/Post/allPosts";

export default (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Home} path="/Home" />
    <Route component={Dashboard} path="/Dashboard" />
    <Route component={Profile} path="/Profile" />
    <Route component={UserPosts} path="/UserPosts" />
    <Route component={allPosts} path="/allPosts" />
  </Switch>
);
