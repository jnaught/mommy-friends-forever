import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../images/Mommy_transparent.png";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: "",
      users: []
    };
  }
  componentDidMount() {
    axios.get("/api/me").then(response => {
      // console.log("authUser: ", response);
      this.setState({ authUser: response.data.user_id });
      // axios
      //   .get("/api/user")
      //   .then(response => {
      //     console.log("users: ", response);
      //     this.setState({ users: response.data });
      //   })
      //   .catch(console.log);
    });
  }

  render() {
    // console.log("state.authUser: ", this.state.authUser);
    return (
      <div className="parent">
        <div className="header-container">
          <div className="profile-picture">
            <img
              className="profile-logo"
              src={logo}
              alt="Mommy Friends Forever"
            />
          </div>

          <div className="nav-bar">
            <Link to="/Home">DASHBOARD </Link>
            {""}
            <Link to="/Profile">PROFILE</Link>
            {""}
            <Link to="/UserPosts">MY POST</Link>
            {""}
            <Link to="/allPosts">EVENT</Link>
          </div>
        </div>
      </div>
    );
    // }
    // else {
    //   return (
    //     <div className="header-alt-container">
    //       <div>MOMMY FRIENDS FOREVER!</div>
    //       <div> Please Log In to Continue</div>
    //       <div />
    //     </div>
    //   );
    // }
  }
}
