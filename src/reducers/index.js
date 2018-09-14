/**
 * @Author: harsha
 * @Date:   2018-09-13T15:18:25+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T16:09:27+05:30
 */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { DynamicFormsReducer } from "./DynamicFormsReducer";

export default combineReducers({
  form: formReducer,
  dropDownValues: DynamicFormsReducer
});
