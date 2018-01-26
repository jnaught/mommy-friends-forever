import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "./allPosts.css";

export default class allPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      newPosts: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/allPosts")
      .then(response => {
        console.log("AllPosts: ", response);
        this.setState({ allPosts: response.data });
      })
      .catch(console.log);
  }
  //   getPost() {
  //     axios
  //       .get("/api/allPost", { newPost: this.state.newPost })
  //       .then(response => console.log(response))
  //       .catch(console.log);
  //   }
  render() {
    const allPost = this.state.allPosts;

    let Posts = allPost.map(data => data.blog);

    return (
      <div className="main">
        <Header />
        <div>
          <div className="title-container"> ALL POSTS HERE </div>
          <div className="forum-container">
            <div className="post"> {Posts[15]}</div>
            <div className="post"> {Posts[14]} </div>
            <div className="post"> {Posts[13]} </div>
            <div className="post"> {Posts[12]} </div>
            <div className="post"> {Posts[11]} </div>
            <div className="post"> {Posts[10]} </div>
            <div className="post"> {Posts[9]} </div>
            <div className="post"> {Posts[8]} </div>
            <div className="post"> {Posts[7]} </div>
            <div className="post"> {Posts[6]} </div>
            <div className="post"> {Posts[5]}</div>
            <div className="post"> {Posts[4]}</div>
            <div className="post"> {Posts[3]} </div>
            <div className="post"> {Posts[2]}</div>
            <div className="post"> {Posts[1]} </div>
            <div className="post"> {Posts[0]}</div>
          </div>
        </div>
      </div>
    );
  }
}
