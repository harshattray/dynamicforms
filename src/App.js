/**
 * @Author: harsha
 * @Date:   2018-09-13T13:58:38+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T15:12:09+05:30
 */

import React, { Component } from "react";
import "./App.css";
import FormExampleSubcomponentControl from "./components/DynamicForms/DynamicForms";
import { reduxForm, Field } from "redux-form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dynamic Forms</h1>
        </header>
        <FormExampleSubcomponentControl />
      </div>
    );
  }
}

export default App;
