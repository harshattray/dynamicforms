/**
 * @Author: harsha
 * @Date:   2018-09-14T14:58:24+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T22:18:52+05:30
 */
import {
  FETCH_DROPDOWN_VALUES,
  FETCH_DROPDOWN_VALUES_INIT,
  FETCH_DROPDOWN_VALUES_SUCCESS,
  FETCH_DROPDOWN_VALUES_ERROR,
  SHOW_MORE_FIELDS,
  SUBMIT_FORM_DATA,
  FORM_SUBMISSION_ERROR,
  INIT_FORM_SUBMISSION,
  FORM_SUBMISSION_SUCCESS
} from "./types";
import qs from "qs";
import axios from "axios";

const config = {
  headers: { "content-type": "application/x-www-form-urlencoded" }
};

/**
 * [fetchDropdownValues Fetching Dropdown Data]
 * @return {[Object]} [dropdown data response from MockyApi]
 */

export const fetchDropdownValues = () => async (dispatch, getState) => {
  dispatch(initDropDownValuesFetch());
  try {
    const res = await axios.get(
      "http://www.mocky.io/v2/5b9d3bc73200006900db938d"
    );
    dispatch({
      type: FETCH_DROPDOWN_VALUES,
      payload: res,
      isFetchingDropdownValues: false
    });
  } catch (e) {
    dispatch({
      type: FETCH_DROPDOWN_VALUES_ERROR,
      payload: e
    });
  }
};

/**
 * [initDropDownValuesFetch initiator action dispatch function]
 * @return {[Object]} [description]
 */

function initDropDownValuesFetch() {
  return {
    type: FETCH_DROPDOWN_VALUES_INIT,
    isFetchingDropdownValues: true
  };
}

export const showMoreFields = value => dispatch => {
  dispatch({
    type: SHOW_MORE_FIELDS,
    showMultiSelect: value
  });
};

/**
 * [submitFormData Form data post request action]
 * @param  {object} formData [form object]
 * @return {[type]}          [description]
 */

export const submitFormData = formData => async (dispatch, getState) => {
  const params = {
    formData
  };
  const post_data = qs.stringify(params);
  try {
    const res = await axios.post(
      "https://reqres.in/api/users",
      post_data,
      config
    );
    dispatch({
      type: SUBMIT_FORM_DATA,
      submitSuccess: true,
      submissionObject: formData
    });
    alert("Upload Success");
  } catch (e) {
    console.log(e, "form error");
    dispatch({
      type: FORM_SUBMISSION_ERROR,
      payload: e
    });
  }
};

/**
 * [initDropDownValuesFetch initiator action dispatch function]
 * @return {[Object]} [description]
 */

function initFormSubmission() {
  return {
    type: INIT_FORM_SUBMISSION
  };
}
