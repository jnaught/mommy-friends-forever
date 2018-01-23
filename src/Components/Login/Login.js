import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div id="main">
        <div className="login-container">
          <div className="login-button">
            <a href="http://localhost:3001/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
}
