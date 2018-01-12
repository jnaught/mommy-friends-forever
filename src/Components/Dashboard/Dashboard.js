import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";
import Post from "../Post/Post";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPost: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/post")
      .then(response => {
        console.log(response);
        this.setState({ recentPost: response.data });
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
    const recentPost = this.state.recentPost;
    let recentPosts = recentPost.map(data => data.blog);

    console.log(recentPost);
    return (
      <div className="dashboard-container">
        <div className="dashboard-intro">
          <p> Welcome to your Dashboard</p>
          <div className="list-container">
            <ul>
              <li>
                {/* ------------------------------User Links!------------------------------------------- */}
                <a href="#"> Profile </a>
              </li>
              <li>
                {" "}
                <a href="#"> Your Posts </a>
              </li>
              <li>
                {" "}
                <a href="#"> new link</a>
              </li>
              <li>
                {" "}
                <a href="#"> new link </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------Recent Post Feed!------------------------------------------- */}
        <div className="post-feed">
          <div className="recent-post">
            <div>
              <div> Recent Posts </div>
              {/* {this.state.recentPost && recentPost.data.pid.blog} */}
              {recentPosts}
            </div>
          </div>
          <Post />
        </div>
      </div>
    );
  }
}
