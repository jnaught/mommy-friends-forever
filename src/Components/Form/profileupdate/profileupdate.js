import React, { Component } from "react";
import axios from "axios";
import "./profileupdate.css";

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: null,
      displayname: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ firstname: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    const { firstname, lastname, age, displayname } = this.state;
    axios
      .post("/api/user", { firstname, lastname, age, displayname })
      .then(res => console.log(res));
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
              firstname={this.state.firstname}
              onChange={e => this.setState({ firstname: e.target.value })}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              lastname={this.state.lastname}
              onChange={e => this.setState({ lastname: e.target.value })}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              age={this.state.age}
              onChange={e => this.setState({ age: e.target.value })}
            />
          </label>
          <label>
            Display Name:
            <input
              type="text"
              displayname={this.state.displayname}
              onChange={e => this.setState({ displayname: e.target.value })}
            />
          </label>
          <input type="submit" value="Submit" />
          <p>
            {this.state.firstname} {this.state.lastname} {this.state.age}{" "}
            {this.state.displayname}
          </p>
        </div>
      </form>
    );
  }
}
