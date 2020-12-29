import React, { Component } from "react";
import Output from "./components/UserOutput.js";
import Input from "./components/UserInput.js";
import "./App.css";

class App extends Component {
  state = {
    username: "Jay Buccio",
  };

  changeUsername = () => {
    this.setState({
      username: "Jay Buccio",
    });
    console.log("changed");
  };

  render() {
    return (
      <div className="App">
        <Input inputValue={this.changeUsername} />
        <Output username={this.state.username} />
        <Output username="Jay Poumian Buccio" />
      </div>
    );
  }
}
export default App;
