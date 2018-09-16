/**
 * @Author: harsha
 * @Date:   2018-09-14T14:58:24+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T16:15:00+05:30
 */
import {
  FETCH_DROPDOWN_VALUES,
  FETCH_DROPDOWN_VALUES_INIT,
  FETCH_DROPDOWN_VALUES_SUCCESS,
  FETCH_DROPDOWN_VALUES_ERROR,
  SHOW_MORE_FIELDS,
  SUBMIT_FORM_DATA
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
    console.log(e, "error object");
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
  console.log(value, "checkbox");
  dispatch({
    type: SHOW_MORE_FIELDS,
    showMultiSelect: value
  });
};

/**
 * [submitFormData description]
 * @param  {object} formData [form object]
 * @return {[type]}          [description]
 */

export const submitFormData = formData => async (dispatch, getState, api) => {
  const params = {
    formData
  };
  const post_data = qs.stringify(params);
  // const res = await api.post("MokyAPIcomes here", post_data, config);
  dispatch({
    type: SUBMIT_FORM_DATA,
    submitSuccess: true,
    submissionObject: formData
  });
};
