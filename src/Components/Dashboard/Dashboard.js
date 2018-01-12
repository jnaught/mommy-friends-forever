import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";
import Post from "../Post/Post";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPost: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/post")
      .then(response => {
        console.log(response);
        this.setState({ recentPost: response });
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
    console.log(recentPost);
    return (
      <div className="dashboard-container">
        <div className="dashboard-intro">
          <p> Welcome to your Dashboard</p>
        </div>
        <div className="post-feed">
          <div className="recent-post">
            <div>
              <div> Recent Posts </div>
              {recentPost.data && recentPost.data[0].blog}
            </div>
          </div>
          <Post />
        </div>
      </div>
    );
  }
}
