import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import logo from "../images/Mommy_transparent.png";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: [],
      users: []
    };
  }
  // componentDidMount() {
  //   axios.get("/api/user/:uid").then(response => {
  //     console.log("authUser: ", response);
  //     this.setState({ authUser: response.data });
  //     axios
  //       .get("/api/user")
  //       .then(response => {
  //         console.log("users: ", response);
  //         this.setState({ users: response.data });
  //       })
  //       .catch(console.log);
  //   });
  // }

  render() {
    // let userID = this.state.authUser.user_id;
    const user = this.state.authUser;
    // const users = this.state.user;
    // console.log("propsUser: ", user);
    if (user) {
      return (
        <div className="parent">
          <div className="header-container">
            <div className="profile-picture">
              <img
                className="profile-logo"
                src={logo}
                alt="Mommy Friends Forever"
              />
              {/* {this.props.user.displayname} */}
            </div>
            {/* <div>MOMMY FRIENDS FOREVER!</div> */}

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
    }
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
