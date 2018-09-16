/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T18:48:18+05:30
 */
import React, { Component } from "react";
import { Form, Loader, Message } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import {
  fetchDropdownValues,
  showMoreFields,
  submitFormData
} from "../../actions/FormActions";
import isValidEmail from "sane-email-validation";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { renderMultiSelect } from "../MultiselectComponent/MultiselectComponent";
import { renderSearchableMultiSelect } from "../SearchableMultiSelect/SearchableMultiselectComponent";
import { renderCheckBox } from "../renderCheckboxComponent/renderCheckBoxComponent";
import { renderDropdown } from "../renderDropdownComponent/renderDropdownComponent";
import { validate } from "../validate";

class SubmitDynamicForms extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchDropdownValues();
  }

  /**
   * [renderFields renders input Fields and takes in relevant values]
   * @param  {String} label       [Input label]
   * @param  {String} placeholder [Imput placeholder]
   * @param  {String} name        [Input Name]
   * @return {Object}             [Input params Object]
   */
  renderFields({
    label,
    type,
    placeholder,
    name,
    input,
    textarea,
    textField,
    MobileField,
    maxlength,
    pattern,
    meta: { touched, error, warning }
  }) {
    console.log(error, "error object");
    return (
      <div>
        {textField && (
          <Form.Input
            type={type}
            label={label}
            placeholder={placeholder}
            {...input}
          />
        )}
        {textarea && (
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
            {...input}
          />
        )}
        {MobileField && (
          <Form.Input
            type={type}
            label={label}
            placeholder={placeholder}
            maxLength={maxlength}
            pattern={pattern}
            {...input}
          />
        )}
        {touched && error && <i>{error}</i>}
      </div>
    );
  }

  /**
   * [handleSignUpSubmit Form submit handler]
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  handleSignUpSubmit = data => {
    console.log(data, "SignUpFormData");
    this.props.submitFormData(data);
  };

  render() {
    const { value } = this.state;
    const {
      dropdowndata,
      multiSelectData,
      searchableMultiselect,
      loadingData,
      handleSubmit,
      showMoreFields,
      showMultiSelect,
      invalid,
      submitting
    } = this.props;
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
            textField="true"
          />
          <Field
            name="userLastName"
            component={this.renderFields}
            placeholder="Last Name"
            required
            label="Last Name"
            textField="true"
          />
          <Field
            name="userSignUpEmail"
            type="email"
            component={this.renderFields}
            placeholder="Email"
            required
            textField="true"
            label="Email"
          />
          <Field
            name="userSignUpMobile"
            component={this.renderFields}
            placeholder="Mobile"
            MobileField="MobileField"
            maxlength={10}
            label="Mobile"
            pattern="[0-9]*"
            type="tel"
            required
          />
          <Field
            name="userGender"
            component={renderDropdown}
            placeholder="Select Gender"
            label="Gender"
            options={dropdowndata}
          />
        </Form.Group>

        <Field
          name="userTextArea"
          textarea="true"
          component={this.renderFields}
          placeholder="Tell us more about you..."
          label="About"
        />
        <Field
          name="userCheckBox"
          component={renderCheckBox}
          label="Click here if you reside in India"
          showMoreFields={showMoreFields}
        />
        {showMultiSelect && (
          <div>
            <Field
              name="userMultiSelect"
              component={renderMultiSelect}
              label="select state"
              enable="false"
              placeholder="Please Select State"
              options={multiSelectData}
            />
            <Field
              name="userSearchableMultiSelect"
              component={renderSearchableMultiSelect}
              label="select language"
              enable="true"
              placeholder="Please Select Language"
              search
              options={searchableMultiselect}
            />
          </div>
        )}
        <Form.Button disabled={invalid} loading={submitting}>
          Submit
        </Form.Button>
      </Form>
    );
  }
}
function mapStateToProps({ dropDownValues, form }) {
  return {
    dropdowndata: dropDownValues.userDropDownData,
    multiSelectData: dropDownValues.userMultiSelectData,
    searchableMultiselect: dropDownValues.userSearchableMultiselect,
    loadingData: dropDownValues.isFetchingDropdownValues,
    showMultiSelect: dropDownValues.showMultiSelect,
    showuserSubmissionData: dropDownValues.showSubmissionData,
    dataSubmitSuccess: dropDownValues.submitSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchDropdownValues, showMoreFields, submitFormData },
    dispatch
  );
}

SubmitDynamicForms = reduxForm({
  validate,
  form: "userDataForm",
  destroyOnUnmount: false,
  fields: ["email"]
})(SubmitDynamicForms);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitDynamicForms);
