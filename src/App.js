import React, { Component } from "react";
import Output from "./components/UserOutput.js";
import Input from "./components/UserInput.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Output />
        <Output />
      </div>
    );
  }
}
export default App;
