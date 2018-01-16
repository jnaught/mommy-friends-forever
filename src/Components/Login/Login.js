import React, { Component } from "react";

export default class Login extends Component {
  render() {
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
