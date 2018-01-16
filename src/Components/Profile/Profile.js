import React, { Component } from "react";
import Update from "../Form/profileupdate/profileupdate";
import Hobbies from "../Form/hobbies/hobbies";
import Header from "../Header/Header";
import "./Profile.css";
// import "./Home.css";

export default class Profile extends Component {
  render() {
    return (
      <div>
        {" "}
        Profile Update Page
        <div>
          {" "}
          <Header />
          <Update />
          <Hobbies />
        </div>
      </div>
    );
  }
}
