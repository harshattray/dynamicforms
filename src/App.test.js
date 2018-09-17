/**
 * @Author: harsha
 * @Date:   2018-09-14T14:06:38+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-17T12:15:47+05:30
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
