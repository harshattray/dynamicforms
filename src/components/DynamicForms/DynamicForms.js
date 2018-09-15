/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-15T23:05:26+05:30
 */
import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { fetchDropdownValues } from "../../actions/FormActions";

class SubmitDynamicForms extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchDropdownValues();
  }

  handleChange = (e, { value }) => this.setState({ value });

  /**
   * [renderFields renders input Fields and takes in relevant values]
   * @param  {String} label       [Input label]
   * @param  {String} placeholder [Imput placeholder]
   * @param  {String} name        [Input Name]
   * @return {Object}             [Input params Object]
   */
  renderFields({ label, placeholder, name, input }) {
    return (
      <div>
        <Form.Input label={label} placeholder={placeholder} {...input} />
      </div>
    );
  }

  /**
   * [renderDropdown Dropdown select handler]
   * @param  {[type]} label       [description]
   * @param  {[type]} placeholder [description]
   * @param  {[type]} name        [description]
   * @param  {[type]} options     [description]
   * @param  {[type]} input       [description]
   * @return {[type]}             [description]
   */

  renderDropdown({ label, placeholder, name, options, input }) {
    console.log(input.value, "field value");
    if (!options) {
      return <Form loading />;
    }
    return (
      <Form.Select
        fluid
        label={label}
        options={options}
        placeholder={placeholder}
      />
    );
  }

  /**
   * [handleSignUpSubmit Form submit handler]
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  handleSignUpSubmit = data => {
    console.log(data, "SignUpFormData");
  };

  render() {
    const { value } = this.state;
    const { dropdowndata, loadingData, handleSubmit } = this.props;

    return (
      <Form
        name="userDataForm"
        onSubmit={handleSubmit(this.handleSignUpSubmit)}
        noValidate
      >
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
            label="Gender"
            options={dropdowndata}
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
function mapStateToProps({ dropDownValues, form }) {
  return {
    dropdowndata: dropDownValues.userDropDownData,
    loadingData: dropDownValues.isFetchingDropdownValues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDropdownValues }, dispatch);
}

SubmitDynamicForms = reduxForm({
  form: "userDataForm",
  destroyOnUnmount: false,
  fields: ["email"]
})(SubmitDynamicForms);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitDynamicForms);
