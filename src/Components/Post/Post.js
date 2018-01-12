import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      putpost: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ putpost: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    const { putpost } = this.state;
    axios.post("/api/post", { putpost }).then(res => console.log(res));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p> {this.state.putpost}</p>
          <input
            type="text"
            putpost={this.state.putpost}
            onChange={e => this.setState({ putpost: e.target.value })}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
