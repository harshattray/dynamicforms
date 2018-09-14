/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T15:42:14+05:30
 */
import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class SubmitDynamicForms extends Component {
  state = {};

  componentDidMount() {}

  handleChange = (e, { value }) => this.setState({ value });

  /**
   * [renderFields renders input Fields and takes in relevant values]
   * @param  {String} label       [Input label]
   * @param  {String} placeholder [Imput placeholder]
   * @param  {String} name        [Input Name]
   * @return {Object}             [Input params Object]
   */
  renderFields({ label, placeholder, name }) {
    return (
      <div>
        <Form.Input label={label} placeholder={placeholder} />
      </div>
    );
  }

  renderDropdown({ label, placeholder, name, options }) {
    return (
      <Form.Select
        fluid
        label={label}
        options={options}
        placeholder={placeholder}
      />
    );
  }

  render() {
    const { value } = this.state;
    return (
      <Form name="userDataForm">
        <Form.Group widths="equal">
          <Field
            name="userFirstName"
            component={this.renderFields}
            placeholder="First Name"
            required
            label="First Name"
          />
          <Field
            name="userLastName"
            component={this.renderFields}
            placeholder="Last Name"
            required
            label="Last Name"
          />
          <Field
            name="userGender"
            component={this.renderDropdown}
            placeholder="Select Gender"
            required
            label="Gender"
            options={options}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label="Small"
            value="sm"
            checked={value === "sm"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Medium"
            value="md"
            checked={value === "md"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Large"
            value="lg"
            checked={value === "lg"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
function mapStateToProps({ form }) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return;
}

SubmitDynamicForms = reduxForm({
  form: "userDataForm",
  destroyOnUnmount: false,
  fields: ["email"]
})(SubmitDynamicForms);

export default SubmitDynamicForms;
