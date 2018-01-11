import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
// import Profile from "../Profile/Profile";

export default class Home extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <div>
          <h1>"Log in to continue "</h1>
          <a href="http://localhost:3001/login">
            <button> Login</button>
          </a>
        </div>
      </div>
    );
  }
}
