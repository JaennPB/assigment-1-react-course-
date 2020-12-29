import React, { Component } from "react";
import Output from "./UserOutput/UserOutput.js";
import Input from "./UserInput/UserInput.js";
import "./App.css";

class App extends Component {
  state = {
    username: "Jay Buccio (default)",
  };

  // turned into event listerner (eventlistener is calling this function), therefore, will get event parameter
  changeUsernameHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    const style = {
      padding: "10px",
      marginLeft: "10px",
      borderRadius: "5px",
      backgroundColor: "aliceblue",
    };

    return (
      <div className="App">
        <Input
          inputValue={this.changeUsernameHandler}
          style={style}
          defaultName={this.state.username}
        />
        <Output username={this.state.username} />
        <Output username="Phoebe of Jupiter" />
      </div>
    );
  }
}
export default App;
