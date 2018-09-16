/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T22:17:27+05:30
 */
import React, { Component } from "react";
import {
  Form,
  Loader,
  Message,
  Segment,
  Container,
  Grid
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import {
  fetchDropdownValues,
  showMoreFields,
  submitFormData
} from "../../actions/FormActions";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { renderMultiSelect } from "../MultiselectComponent/MultiselectComponent";
import { renderSearchableMultiSelect } from "../SearchableMultiSelect/SearchableMultiselectComponent";
import { renderCheckBox } from "../renderCheckboxComponent/renderCheckBoxComponent";
import { renderDropdown } from "../renderDropdownComponent/renderDropdownComponent";
import { renderFields } from "../renderFieldsComponent/renderFieldsComponents";
import { renderUploadField } from "../renderFieldsComponent/renderuploadField";
import { validate } from "../validate";

class SubmitDynamicForms extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchDropdownValues();
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
      <Segment.Group>
        <Form
          name="userDataForm"
          onSubmit={handleSubmit(this.handleSignUpSubmit)}
          noValidate
        >
          <Form.Group>
            <Grid.Row columns={3}>
              <Field
                name="userFirstName"
                component={renderFields}
                placeholder="First Name"
                required
                label="First Name"
                textField="true"
              />
              <Field
                name="userLastName"
                component={renderFields}
                placeholder="Last Name"
                required
                label="Last Name"
                textField="true"
              />
              <Field
                name="userSignUpEmail"
                type="email"
                component={renderFields}
                placeholder="Email"
                required
                textField="true"
                label="Email"
              />
              <Field
                name="userSignUpMobile"
                component={renderFields}
                placeholder="Mobile"
                MobileField="MobileField"
                maxlength={10}
                label="Mobile"
                pattern="[0-9]*"
                type="tel"
                required
              />
              <Field
                name="userFileUpload"
                type="file"
                uploadField="uploadField"
                value={null}
                component={renderUploadField}
              />
            </Grid.Row>
          </Form.Group>
          <Grid.Row columns={2}>
            <Field
              name="userGender"
              component={renderDropdown}
              placeholder="Select Gender"
              label="Gender"
              options={dropdowndata}
            />
            <Field
              name="userTextArea"
              textarea="true"
              component={renderFields}
              placeholder="Tell us more about you..."
              label="Enter description"
            />
          </Grid.Row>

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
      </Segment.Group>
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

const afterSubmitdata = (result, dispatch) => dispatch(reset("userDataForm"));

SubmitDynamicForms = reduxForm({
  validate,
  form: "userDataForm",
  destroyOnUnmount: false,
  fields: ["email"],
  onSubmitSuccess: afterSubmitdata
})(SubmitDynamicForms);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitDynamicForms);
