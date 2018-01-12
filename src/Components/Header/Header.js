import React, { Component } from "react";
import axios from "axios";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  componentDidMount() {
    axios.get("/api/me").then(response => {
      this.setState({ authUser: response.data }).catch(console.log);
    });
  }

  render() {
    const user = this.state.authUser;
    if (user)
      return (
        <div className="parent">
          <div className="header-container">
            <div>MOMMY FRIENDS FOREVER!</div>
          </div>
          {this.state.test && (
            <div>
              <div className="profile-picture">
                <img src={user.picture} alt="profile" />
              </div>
              {/* <div className="profile-name">{user.name.givenName}</div> */}
            </div>
          )}
        </div>
      );
    else
      return (
        <div className="header-alt-container">
          <div>MOMMY FRIENDS FOREVER!</div>
        </div>
      );
  }
}
