import { render } from "react-dom";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Countries from "./App.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countries />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
