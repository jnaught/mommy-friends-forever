import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "./UserPosts.css";
import edit from "../images/edit.svg";
import remove from "../images/trashbin.svg";
import twittericon from "../images/social_twitter.svg";
import facebookicon from "../images/social_facebook.svg";

export default class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPost: [],
      user_id: "",
      picture: "",
      displayname: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/me")
      .then(response => {
        console.log("me userPost response: ", response);
        this.setState({
          user_id: response.data.user_id,
          picture: response.data.picture,
          displayname: response.data.displayname
        });
      })
      .catch(console.log);

    axios
      .get("/api/getPost")
      .then(response => {
        console.log("Blogs userPost: ", response);
        this.setState({ userPost: response.data });
      })
      .catch(console.log);
  }
  handleClick = () => alert(" POST DELETED");

  render() {
    console.log("state userpost.js: ", this.state);
    const userPost = this.state.userPost;
    let usersPosts = userPost.map(data => data.blog);
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="myPostIntro-container">
          <div className="overall">
            <div>
              <div className="post-title">
                <p> My Posts</p>
              </div>
              <div className="myPostList-container-top">
                <div>
                  {" "}
                  <img src={this.state.picture} alt="" />
                  {this.state.displayname}
                </div>
              </div>
            </div>

            <div className="myPost-container">
              <div className="myPost">
                {" "}
                {usersPosts[0]}
                <div className="user-actions">
                  <img src={edit} alt="" />
                  <img onClick={this.handleClick} src={remove} alt="" />
                </div>
              </div>
              <div>
                <div className="myPost">
                  {" "}
                  {usersPosts[1]}
                  <div className="user-actions">
                    <img src={edit} alt="" />
                    <img src={remove} alt="" />
                  </div>{" "}
                </div>
                <div className="myPost">
                  {" "}
                  {usersPosts[2]}{" "}
                  <div className="user-actions">
                    <img src={edit} alt="" />
                    <img src={remove} alt="" />
                  </div>
                </div>
                <div className="myPost">
                  {" "}
                  {usersPosts[3]}{" "}
                  <div className="user-actions">
                    <img src={edit} alt="" />
                    <img src={remove} alt="" />
                  </div>
                </div>
                <div className="myPost">
                  {" "}
                  {usersPosts[4]}{" "}
                  <div className="user-actions">
                    <img src={edit} alt="" />
                    <img src={remove} alt="" />
                  </div>
                </div>
                <div className="myPost">
                  {" "}
                  {usersPosts[5]}{" "}
                  <div className="user-actions">
                    <img src={edit} alt="" />
                    <img src={remove} alt="" />
                  </div>
                </div>
                <div className="myPost">
                  {" "}
                  {usersPosts[6]}
                  <div className="user-actions">
                    <img src={edit} alt="" />
                    <img src={remove} alt="" />
                  </div>{" "}
                </div>
              </div>
            </div>
            <div>
              <div className="post-title">
                <p> Social Media</p>
              </div>
              <div className="social-container">
                <div className="socialmediaicons">
                  <img className="social-logo" src={twittericon} alt="" />

                  <img className="social-logo" src={facebookicon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
