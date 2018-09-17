/**
 * @Author: harsha
 * @Date:   2018-09-17T13:13:17+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-17T16:30:40+05:30
 */
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import Enzyme, { shallow, mount } from "enzyme";
import App from "../../App";
import SubmitDynamicForms from "../DynamicForms/DynamicForms";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("App component mounts", () => {
  const div = document.createElement("div");
  ReactDOM.render(App, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Dynamic Forms Component Exists", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(<SubmitDynamicForms />).length);
});

it("has a form", () => {
  const wrapped = shallow(<App />);
  const wrappedDyn = wrapped.shallow(<SubmitDynamicForms />);
  expect(wrappedDyn.find("form").length);
});

it("has an input", () => {
  const wrapped = shallow(<App />);
  const wrappedDyn = wrapped.shallow(<SubmitDynamicForms />);
  expect(wrappedDyn.find("input").length);
});

it("has a button", () => {
  const wrapped = shallow(<App />);
  const wrappedDyn = wrapped.shallow(<SubmitDynamicForms />);
  expect(wrappedDyn.find("button").length);
});
