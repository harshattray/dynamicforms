/**
 * @Author: harsha
 * @Date:   2018-09-13T14:45:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-20T12:24:06+05:30
 */
import React, { Component } from 'react';
import {
	Form,
	Loader,
	Message,
	Segment,
	Container,
	Grid
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector, reset } from 'redux-form';
import {
	fetchDropdownValues,
	showMoreFields,
	submitFormData
} from '../../actions/FormActions';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { renderMultiSelect } from '../MultiselectComponent/MultiselectComponent';
import { renderSearchableMultiSelect } from '../SearchableMultiSelect/SearchableMultiselectComponent';
import { renderCheckBox } from '../renderCheckboxComponent/renderCheckBoxComponent';
import { renderDropdown } from '../renderDropdownComponent/renderDropdownComponent';
import { renderFields } from '../renderFieldsComponent/renderFieldsComponents';
import { renderUploadField } from '../renderFieldsComponent/renderuploadField';
import { validate } from '../validate';

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
				noValidate>
				<Form.Group className="ui grid">
					<div className="row">
						<Field
							name="userFirstName"
							component={renderFields}
							placeholder="First Name"
							required
							label="First Name"
							textField="true"
							className="column"
						/>
						<Field
							name="userLastName"
							component={renderFields}
							placeholder="Last Name"
							required
							label="Last Name"
							textField="true"
							className="column"
						/>
						<Field
							name="userSignUpEmail"
							type="email"
							component={renderFields}
							placeholder="Email"
							required
							textField="true"
							label="Email"
							className="column"
						/>
					</div>
					<div className="row">
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
							label="Upload"
							uploadField="uploadField"
							value={null}
							component={renderUploadField}
						/>
					</div>
					<div className="row">
						<Field
							name="userGender"
							component={renderDropdown}
							placeholder="Select Gender"
							label="Gender"
							options={dropdowndata}
						/>
					</div>
					<div className="row">
						<Field
							name="userTextArea"
							textarea="true"
							component={renderFields}
							placeholder="Tell us more about you..."
							label="Enter description"
						/>
					</div>
					<div className="row">
						<Field
							name="userCheckBox"
							component={renderCheckBox}
							label="Click here if you reside in India"
							showMoreFields={showMoreFields}
						/>
						{showMultiSelect && (
							<div className="hidden-fields">
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
					</div>
				</Form.Group>
				<Form.Button
					disabled={invalid}
					loading={submitting}
					size="huge"
					color="blue"
					className="pull-left">
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

const afterSubmitdata = (result, dispatch) => dispatch(reset('userDataForm'));

SubmitDynamicForms = reduxForm({
	validate,
	form: 'userDataForm',
	destroyOnUnmount: false,
	fields: ['email'],
	onSubmitSuccess: afterSubmitdata
})(SubmitDynamicForms);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitDynamicForms);
