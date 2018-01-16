import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: []
    };
  }
  componentDidMount() {
    axios.get("/api/me").then(response => {
      console.log("authUser: ", response);
      this.setState({ authUser: response.data });
      // axios
      //   .get("/api/user/:uid")
      //   .then(response => {
      //     console.log("user: ", response);
      //     this.setState({ user: response.data });
      //   })
      //   .catch(console.log);
    });
  }

  render() {
    // let userID = this.state.authUser.user_id;
    const user = this.state.authUser;

    if (user) {
      return (
        <div className="parent">
          <div className="header-container">
            <div className="profile-picture">
              <img src={user.picture} alt="profile" />
              {user.displayname}
            </div>
            <div>MOMMY FRIENDS FOREVER!</div>

            <div className="nav-bar">
              <Link to="/Home">DASHBOARD </Link>
              {""}
              <Link to="/Profile">PROFILE</Link>
              {""}
              <Link to="/UserPosts">MY POSTS</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-alt-container">
          <div>MOMMY FRIENDS FOREVER!</div>
          <div> Please Log In to Continue</div>
          <div />
        </div>
      );
    }
  }
}
