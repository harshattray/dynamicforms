/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T01:57:37+05:30
 */
import React, { Component } from "react";
import { Form, Loader } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { fetchDropdownValues, showMoreFields } from "../../actions/FormActions";

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
  renderFields({ label, placeholder, name, input, textarea, textField }) {
    return (
      <div>
        {textField && (
          <Form.Input label={label} placeholder={placeholder} {...input} />
        )}
        {textarea && (
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
            {...input}
          />
        )}
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
    function handleSelect(e, { value }) {
      return input.onChange(value);
    }
    if (!options) {
      return <Loader inline active />;
    }
    return (
      <Form.Select
        fluid
        label={label}
        options={options}
        placeholder={placeholder}
        {...input}
        onChange={handleSelect}
      />
    );
  }

  /**
   * [renderCheckBox checbox handler and dispatcher]
   * @param  {[type]} name     [description]
   * @param  {[type]} label    [description]
   * @param  {[type]} input    [description]
   * @param  {[type]} onChange [description]
   * @param  {[type]} input    [description]
   * @return {[type]}          [description]
   */

  renderCheckBox({
    name,
    label,
    input: { value, onChange, ...input },
    showMoreFields
  }) {
    function showMoreDispatcher(data) {
      showMoreFields(data);
      return onChange(data);
    }
    return (
      <Form.Checkbox
        label={label}
        {...input}
        defaultChecked={!!value}
        onChange={(e, data) => showMoreDispatcher(data.checked)}
      />
    );
  }

  /**
   * [renderMultiSelect multiSelectData handler]
   * @param  {[type]} name        [description]
   * @param  {[type]} options     [description]
   * @param  {[type]} placeholder [description]
   * @param  {[type]} input       [description]
   * @param  {[type]} onChange    [description]
   * @param  {[type]} input       [description]
   * @return {[type]}             [description]
   */

  renderMultiSelect({
    name,
    options,
    placeholder,
    input: { value, onChange, ...input }
  }) {
    function handleMultiSelect(e, { value }) {
      return onChange(value);
    }
    return (
      <Form.Dropdown
        name={name}
        placeholder={placeholder}
        fluid
        multiple
        selection
        options={options}
        onChange={handleMultiSelect}
        {...input}
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
    const {
      dropdowndata,
      multiSelectData,
      loadingData,
      handleSubmit,
      showMoreFields,
      showMultiSelect
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
        <Field
          name="userTextArea"
          textarea="true"
          component={this.renderFields}
          placeholder="Tell us more about you..."
          label="About"
        />
        <Field
          name="userCheckBox"
          component={this.renderCheckBox}
          label="Click here if you reside in India"
          showMoreFields={showMoreFields}
        />
        <Field
          name="userMultiSelect"
          component={this.renderMultiSelect}
          label="select state"
          placeholder="Please Select State"
          options={multiSelectData}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
function mapStateToProps({ dropDownValues, form }) {
  return {
    dropdowndata: dropDownValues.userDropDownData,
    multiSelectData: dropDownValues.userMultiSelectData,
    loadingData: dropDownValues.isFetchingDropdownValues,
    showMultiSelect: dropDownValues.showMultiSelect
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDropdownValues, showMoreFields }, dispatch);
}

SubmitDynamicForms = reduxForm({
  form: "userDataForm",
  destroyOnUnmount: false,
  fields: ["email"]
})(SubmitDynamicForms);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitDynamicForms);
