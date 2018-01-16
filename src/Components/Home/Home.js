import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
// import routes from "../../routes";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
// import Profile from "../Profile/Profile";

export default class Home extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Header />

        <Dashboard />
      </div>
    );
  }
}
