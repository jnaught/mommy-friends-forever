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
      .get("/api/post")
      .then(response => {
        console.log("Blogs: ", response);
        this.setState({ userPost: response.data });
      })
      .catch(console.log);
  }
  getPost() {
    axios
      .get("/api/post", { userPost: this.state.userPost })
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
        <div> {usersPosts[5]} </div>
      </div>
    );
  }
}
