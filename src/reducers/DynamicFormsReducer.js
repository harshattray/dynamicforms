/**
 * @Author: harsha
 * @Date:   2018-09-14T16:03:13+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T16:15:10+05:30
 */
import {
  FETCH_DROPDOWN_VALUES,
  FETCH_DROPDOWN_VALUES_ERROR,
  FETCH_DROPDOWN_VALUES_INIT,
  FETCH_DROPDOWN_VALUES_SUCCESS
} from "../actions/types";

const initial_state = {
  isFetchingDropdownValues: false
};

/**
 * [Form data reducer]
 * @param  {Object} [state=initial_state] [initial state object]
 * @param  {type} action                [dispatched action object]
 * @return {Object}                       [resultant state object]
 */

export default (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_DROPDOWN_VALUES_INIT:
      return {
        ...state,
        isFetchingDropdownValues: action.isFetchingDropdownValues
      };
    case FETCH_DROPDOWN_VALUES:
      return {
        ...state,
        userDropDownData: action.payload.data,
        isFetchingDropdownValues: action.isFetchingDropdownValues
      };
  }
};