/**
 * @Author: harsha
 * @Date:   2018-09-14T14:58:24+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T17:10:29+05:30
 */
import {
  FETCH_DROPDOWN_VALUES,
  FETCH_DROPDOWN_VALUES_INIT,
  FETCH_DROPDOWN_VALUES_SUCCESS,
  FETCH_DROPDOWN_VALUES_ERROR
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
  console.log("function accessed here");
  try {
    const res = await axios.get(
      "http://www.mocky.io/v2/5b9b9e033000007100e7c553"
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
  dispatch({
    type: FETCH_DROPDOWN_VALUES_INIT,
    isFetchingDropdownValues: true
  });
}
