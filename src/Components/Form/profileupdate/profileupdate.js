import React, { Component } from "react";
import axios from "axios";
import "./profileupdate.css";

export default class profileupdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayname: "",
      user_id: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/me")
      .then(response => {
        this.setState({
          user_id: response.data.user_id
        });
      })

      .catch(console.log);
  }
  handleChange(event) {
    this.setState({ firstname: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    axios.put("/api/updateEmail", this.state).then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="profileupdate-container">
            {/* {" "}
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
            </label> */}
            <label>
              Email:
              <input
                type="text"
                email={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
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
            <p>
              {this.state.firstname} {this.state.lastname} {this.state.age}{" "}
              {this.state.displayname}
            </p>
          </div>
          <div className="profileupdate-button">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
