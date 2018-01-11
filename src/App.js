import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
// import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null
    };
  }

  componentDidMount() {
    axios
      .get("/api/me")
      .then(response => {
        // console.log(response);
        this.setState({ test: response.data });
      })
      .catch(console.log);
  }

  render() {
    const user = this.state.test;
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        {this.state.test && (
          <div>
            <div className="profile-picture">
              <img src={user.picture} alt="profile" />
            </div>
            <div className="profile-name">{user.name.givenName}</div>
          </div>
        )}

        <div> {routes} </div>
      </div>
    );
  }
}

export default App;
