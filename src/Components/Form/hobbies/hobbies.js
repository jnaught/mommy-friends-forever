import React, { Component } from "react";
import axios from "axios";
import "./hobbies.css";

export default class Hobbies extends Component {
  constructor(props) {
    super(props);

    this.onChange = {
      area: this.handleChange.bind(this, "area"),
      children: this.handleChange.bind(this, "children"),
      playdate: this.handleChange.bind(this, "playdate"),
      mommydate: this.handleChange.bind(this, "mommydate"),
      flavor: this.handleChange.bind(this, "flavor")
    };
    this.state = {
      area: "",
      children: "",
      playdate: "",
      mommydate: "",
      flavor: "",
      user_id: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/me")
      .then(response => {
        console.log("user: ", response);
        this.setState({
          user_id: response.data.user_id,
          area: response.data.area,
          children: response.data.children,
          playdate: response.data.playdate,
          mommydate: response.data.mommydate,
          flavor: response.data.flavor
        });
      })
      .catch(console.log);

    // axios
    //   .get("/api/getUser")
    //   .then(response => {
    //     console.log("getUserInfo: ", response);
    //     this.setState({
    //       area: response.data.area,
    //       children: response.data.children,
    //       playdate: response.data.playdate,
    //       mommydate: response.data.mommydate,
    //       flavor: response.data.flavor
    //     });
    //   })
    //   .catch(console.log);
  }
  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    axios
      .put("/api/updateUser/", this.state)
      .then(response => console.log(response));
  }

  render() {
    console.log(this.state);
    return (
      <div className="form-container">
        <div className="hobby-title">Let's get a little more information</div>
        <form onSubmit={this.handleSubmit}>
          {/* ------------------------------------------------ start of options ------------------------------ */}

          <div className="hobbies-container">
            {/* ------------------------------------------------ option one ------------------------------ */}
            <div className="list">
              <label>
                <div>Location: {this.state.area}</div>
              </label>
              <div>
                <select value={this.state.area} onChange={this.onChange.area}>
                  <option value="">Select Area</option>
                  <option value="Roanoke">Roanoke</option>
                  <option value="Trophy Club">Trophy Club</option>
                  <option value="GrapeVine">GrapeVine</option>
                </select>
              </div>
            </div>
            {/* ------------------------------------------------ option two ------------------------------ */}

            <div className="list">
              <label>Child age: {this.state.children}</label>
              <div>
                <select
                  value={this.state.children}
                  onChange={this.onChange.children}
                >
                  <option value="">Children Age Range</option>
                  <option value="infant - 3yrs">infant - 3yrs</option>
                  <option value="4-6">4-6</option>
                  <option value="7-9">7-9</option>
                  <option value="10-13">10-13</option>
                </select>
              </div>
            </div>
            {/* ------------------------------------------------ option three ------------------------------ */}

            <div className="list">
              <label>Looking for Playdate: {this.state.playdate}</label>
              <select
                value={this.state.playdate}
                onChange={this.onChange.playdate}
              >
                <option value="">Play Date</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/* ------------------------------------------------ option four ------------------------------ */}

            <div className="list">
              <label>Looking for a Mommy Date: {this.state.mommydate}</label>
              <select
                value={this.state.value}
                onChange={this.onChange.mommydate}
              >
                <option value="">Mommy Date</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/* ------------------------------------------------ option five ------------------------------ */}

            <div className="list">
              <label>favorite La Croix flavor:{this.state.flavor} </label>
              <select value={this.state.flavor} onChange={this.onChange.flavor}>
                <option value="">Favorite Flavor</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
          </div>
          {/* ------------------------------------------------ end of options ------------------------------ */}
          <div className="hobbies-button">
            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
