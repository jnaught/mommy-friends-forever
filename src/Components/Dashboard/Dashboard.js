import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import Post from "../Post/Post";
// import Header from "../Header/Header";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPost: [],
      userPost: [],
      user: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/posts")
      .then(response => {
        // console.log("Blogs: ", response);
        this.setState({ recentPost: response.data });
      })
      .catch(console.log);

    axios
      .get("/api/user/:uid")
      .then(response => {
        // console.log("user: ", response);
        this.setState({ user: response.data });
      })
      .catch(console.log);
  }

  getPost() {
    axios
      .get("/api/post", { recentPost: this.state.recentPost })
      .then(response => console.log(response))
      .catch(console.log);
  }
  render() {
    const user = this.state.user;
    const recentPost = this.state.recentPost;
    let recentPosts = recentPost.map(data => data.blog);

    // console.log(recentPost);
    return (
      <div className="dashboard-container">
        <div className="dashboard-intro">
          <p> Welcome to your Dashboard</p>
          <div className="list-container">
            <ul>
              <li>
                {/* ------------------------------User Links!------------------------------------------- */}
                <Link to="/"> HOME</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/ProfileUpdate">Profile</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------Recent Post Feed!------------------------------------------- */}
        <div className="post-feed">
          <div className="recent-post">
            <div>
              <div className="dashboard-title"> Recent Posts </div>
              <div className="post-list-container">
                <div className="post-list">{recentPosts[4]}</div>
                <div className="post-list">{recentPosts[3]}</div>
                <div className="post-list">{recentPosts[2]}</div>
                <div className="post-list">{recentPosts[1]}</div>
                <div className="post-list">{recentPosts[0]}</div>
              </div>
            </div>
          </div>
          <Post />
        </div>
      </div>
    );
  }
}
