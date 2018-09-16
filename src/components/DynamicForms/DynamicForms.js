/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T11:29:08+05:30
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
    MobileField
  }) {
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
    search,
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

  renderSearchableMultiSelect({
    name,
    options,
    placeholder,
    input: { value, onChange, ...input }
  }) {
    function handleSearchableMultiSelect(e, data) {
      return onChange(data.value) || input.onChange(value);
    }
    return (
      <Form.Dropdown
        name={name}
        placeholder={placeholder}
        fluid
        search
        multiple
        selection
        options={options}
        onChange={handleSearchableMultiSelect}
        {...input}
      />
    );
  }

  renderRadioBlock({
    name,
    label,
    blockName,
    input: { value, onChange, ...input }
  }) {
    function radioValues(value) {
      return onChange(value);
    }

    return (
      <div>
        <Form.Radio
          label={label}
          {...input}
          onChange={(e, { value }) => radioValues(value)}
        />
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
            required
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
          <Field
            name="userSizeOptions"
            component={this.renderRadioBlock}
            value="small"
            label="Small"
          />
          <Field
            name="userSizeOptions"
            component={this.renderRadioBlock}
            value="large"
            label="large"
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
        {showMultiSelect && (
          <div>
            <Field
              name="userMultiSelect"
              component={this.renderMultiSelect}
              label="select state"
              enable="false"
              placeholder="Please Select State"
              options={multiSelectData}
            />
            <Field
              name="userSearchableMultiSelect"
              component={this.renderSearchableMultiSelect}
              label="select language"
              enable="true"
              placeholder="Please Select Language"
              search
              options={searchableMultiselect}
            />
          </div>
        )}
        <Form.Button>Submit</Form.Button>
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
