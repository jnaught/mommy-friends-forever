import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";

export default class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPost: [],
      userPosts: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/getPost")
      .then(response => {
        console.log("Blogs: ", response);
        this.setState({ userPost: response.data });
      })
      .catch(console.log);
  }
  getPost() {
    axios
      .get("/api/getPost", { userPost: this.state.userPost })
      .then(response => console.log(response))
      .catch(console.log);
  }
  render() {
    const userPost = this.state.userPost;
    let usersPosts = userPost.map(data => data.blog);
    return (
      <div>
        <div>
          {" "}
          <Header />{" "}
        </div>
        <div> User Posts</div>
        <div> {usersPosts[0]} </div>
        <div> {usersPosts[1]} </div>
        <div> {usersPosts[2]} </div>
        <div> {usersPosts[3]} </div>
        <div> {usersPosts[4]} </div>
        <div> {usersPosts[5]} </div>
        <div> {usersPosts[6]} </div>
      </div>
    );
  }
}
