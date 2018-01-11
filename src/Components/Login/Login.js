import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div> Login Page</div>
        <div>
          <a href={process.env.APP_LOGIN}>
            <button> Login </button>
          </a>
        </div>
      </div>
    );
  }
}
