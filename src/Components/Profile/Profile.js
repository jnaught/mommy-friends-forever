import React, { Component } from "react";
import Update from "../Form/profileupdate/profileupdate";
// import "./Home.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="home-welcome">
        {" "}
        Profile Update Page
        <div>
          {" "}
          <Update />
        </div>
      </div>
    );
  }
}
