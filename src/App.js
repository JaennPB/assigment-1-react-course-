import React, { Component } from "react";
import Output from "./components/UserOutput.js";
import Input from "./components/UserInput.js";
import "./App.css";

class App extends Component {
  state = {
    username: "Jay Buccio (default)",
  };

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
    console.log("changed");
  };

  render() {
    return (
      <div className="App">
        <Input
          username={this.state.username}
          inputValue={this.changeUsername}
        />
        <Output username={this.state.username} />
        <Output username="Phoebe of Jupiter" />
      </div>
    );
  }
}
export default App;
