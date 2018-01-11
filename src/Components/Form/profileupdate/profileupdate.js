import React, { Component } from "react";
import "./profileupdate.css";

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ firstname: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.firstname);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          {" "}
          <label>
            First Name:
            <input
              type="text"
              firstname={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
