import React, { Component } from "react";
import "./Home.css";
import Profile from "../Profile/Profile";

export default class Home extends Component {
  render() {
    return (
      <div className="home-welcome">
        {" "}
        Welcome to Mommy Friends Forever!
        <div>
          {" "}
          <Profile />
        </div>
      </div>
    );
  }
}
