/**
 * @Author: harsha
 * @Date:   2018-09-13T13:58:38+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T14:23:08+05:30
 */

import React, { Component } from "react";
import "./App.css";
import MenuExampleSizeTiny from "./components/HomePageComponent/HomePageComponent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MenuExampleSizeTiny />
      </div>
    );
  }
}

export default App;
