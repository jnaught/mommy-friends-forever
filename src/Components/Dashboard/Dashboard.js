import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";
import Post from "../Post/Post";
import edit from "../images/edit.svg";
import remove from "../images/trashbin.svg";
import twittericon from "../images/social_twitter.svg";
import facebookicon from "../images/social_facebook.svg";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPost: [],
      userPost: [],
      user_id: "",
      picture: "",
      authorID0: "",
      authorID1: "",
      authorID2: "",
      authorID3: "",
      authorID4: "",
      authorDisplayName: "",
      displayname: ""
    };
  }

  componentDidMount() {
    // --------------------------- [get posts= set state for recentPosts] ----------------------
    axios
      .get("/api/recentPosts")
      .then(response => {
        console.log("Blogs: ", response);
        this.setState({
          recentPost: response.data,
          authorID0: response.data[0],
          authorID1: response.data[1],
          authorID2: response.data[2],
          authorID3: response.data[3],
          authorID4: response.data[4]
        });
      })
      .catch(console.log);
    // --------------------------- [get user id= set state for user] ----------------------
    axios
      .get("/api/me")
      .then(response => {
        console.log("me response: ", response);
        this.setState({
          user: response.data.user_id,
          picture: response.data.picture,
          displayname: response.data.displayname
        });
      })
      .catch(console.log);
  }
  getPost() {
    axios
      .get("/api/recentPosts", { recentPost: this.state.recentPost })
      .then(response => console.log(response))
      .catch(console.log);
  }

  render() {
    const recentPost = this.state.recentPost;
    let recentPosts = recentPost.map(data => data.blog);

    console.log("State: ", this.state);
    return (
      <div className="dashboard-container">
        <div className="dashboard-intro">
          <p>Dashboard</p>
          <div className="list-container">
            <div>
              {" "}
              <img src={this.state.picture} alt="" />
              {this.state.displayname}
            </div>
          </div>
        </div>

        {/* ------------------------------Recent Post Feed!------------------------------------------- */}
        <div className="post-feed">
          <div className="recent-post">
            <div>
              <div className="dashboard-title"> Recent Posts </div>
              <div className="post-list-container">
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={this.state.authorID4.picture} alt="" />
                    <div className="authorID">
                      {this.state.authorID4.displayname}
                    </div>
                  </div>
                  <div className="postlist-text"> {recentPosts[4]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={this.state.authorID3.picture} alt="" />
                    <div className="authorID">
                      {this.state.authorID3.displayname}
                    </div>
                  </div>
                  <div className="postlist-text"> {recentPosts[3]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={this.state.authorID2.picture} alt="" />
                    <div className="authorID">
                      {this.state.authorID2.displayname}
                    </div>
                  </div>
                  <div className="postlist-text"> {recentPosts[2]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={this.state.authorID1.picture} alt="" />
                    <div className="authorID">
                      {this.state.authorID1.displayname}
                    </div>
                  </div>
                  <div className="postlist-text"> {recentPosts[1]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={this.state.authorID0.picture} alt="" />
                    <div className="authorID">
                      {this.state.authorID0.displayname}
                    </div>
                  </div>
                  <div className="postlist-text"> {recentPosts[0]}</div>
                </div>
              </div>
            </div>
          </div>
          <Post />
        </div>
        {/* -------------------------[ right side social media links]----------------------------- */}
        <div className="dashboard-outro">
          <p>Social Media</p>
          <div className="social-container">
            <div className="socialmediaicons">
              <img className="social-logo" src={twittericon} alt="" />

              <img className="social-logo" src={facebookicon} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
