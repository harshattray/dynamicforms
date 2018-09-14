/**
 * @Author: harsha
 * @Date:   2018-09-14T14:58:24+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T15:58:21+05:30
 */
import {
  FETCH_DROPDOWN_VALUES,
  FETCH_DROPDOWN_VALUES_INIT,
  FETCH_DROPDOWN_VALUES_SUCCESS,
  FETCH_DROPDOWN_VALUES_ERROR
} from "./types";

import qs from "qs";

const config = {
  headers: { "content-type": "application/x-www-form-urlencoded" }
};

/**
 * [fetchDropdownValues Fetching Dropdown Data]
 * @return {[Object]} [dropdown data response from MockApi]
 */

export const fetchDropdownValues = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get(
      "http://www.mocky.io/v2/5b9b8c763000001000e7c4d1"
    );
    dispatch({
      type: FETCH_DROPDOWN_VALUES,
      payload: res,
      isFetchingDropdownValues: false
    });
  } catch (e) {
    dispatch({
      type: FETCH_DROPDOWN_VALUES_ERROR,
      payload: error
    });
  }
};

function initDropDownValuesFetch() {
  dispatch({
    type: FETCH_DROPDOWN_VALUES_INIT,
    isFetchingDropdownValues: true
  });
}
