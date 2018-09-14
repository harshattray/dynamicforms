/**
 * @Author: harsha
 * @Date:   2018-09-13T15:18:25+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-14T14:55:19+05:30
 */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer
});
