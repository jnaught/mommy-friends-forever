import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { retrieveUser } from "../../ducks/user";
import "./Dashboard.css";
import Post from "../Post/Post";
// import Header from "../Header/Header";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPost: [],
      userPost: [],
      user: "",
      picture: "",
      authorID: ""
    };
  }

  componentDidMount() {
    // --------------------------- [get posts= set state for recentPosts] ----------------------
    axios
      .get("/api/allPosts")
      .then(response => {
        // console.log("Blogs: ", response);
        this.setState({ recentPost: response.data });
      })
      .catch(console.log);
    // --------------------------- [get user id= set state for user] ----------------------
    axios
      .get("/api/me")
      .then(response => {
        console.log("user: ", response);
        this.setState({ user: response.data });
      })
      .catch(console.log);
    // --------------------------- [get picture= sets state for picture] ----------------------
    axios
      .get("/api/pic/:uid", this.state.user.user_id)
      .then(response => {
        console.log("pic: ", response);
        this.setState({ picture: response.data });
      })
      .catch(console.log);

    // --------------------------- [get authorID= sets state for authorID] ----------------------

    axios
      .get("/api/authorID/")
      .then(response => {
        // console.log("authorID: ", response);
        this.setState({ authorID: response.data[0] });
      })
      .catch(console.log);
  }
  // getUser(){
  //   axios.get('/spi/getUser/')
  // }
  getPost() {
    axios
      .get("/api/recentPosts", { recentPost: this.state.recentPost })
      .then(response => console.log(response))
      .catch(console.log);
  }

  render() {
    const profilepic = this.state.picture;
    const recentPost = this.state.recentPost;
    const author = this.state.authorID;
    let recentPosts = recentPost.map(data => data.blog);
    // console.log("State: ", this.state);
    // console.log("dashboard: ", this.state.user);
    // console.log("props: ", this.props.user);
    // console.log("author id: ", this.state.authorID);
    return (
      <div className="dashboard-container">
        <div className="dashboard-intro">
          <p> Welcome to your Dashboard</p>
          <div className="list-container">
            <div>
              {" "}
              <img src={profilepic.picture} alt="" />
              {profilepic.firstname}
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
                    <img src={profilepic.picture} alt="" />
                    <div className="authorID">{author.firstname}</div>
                  </div>
                  <div> {recentPosts[4]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={profilepic.picture} alt="" />
                    <div className="authorID">{author.firstname}</div>
                  </div>
                  <div> {recentPosts[3]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={profilepic.picture} alt="" />
                    <div className="authorID">{author.firstname}</div>
                  </div>
                  <div> {recentPosts[2]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={profilepic.picture} alt="" />
                    <div className="authorID">{author.firstname}</div>
                  </div>
                  <div> {recentPosts[1]}</div>
                </div>
                <div className="post-list">
                  <div>
                    {" "}
                    <img src={profilepic.picture} alt="" />
                    <div className="authorID">{author.firstname}</div>
                  </div>
                  <div> {recentPosts[0]}</div>
                </div>
              </div>
            </div>
          </div>
          <Post />
        </div>
      </div>
    );
  }
}
