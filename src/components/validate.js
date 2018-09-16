/**
 * @Author: harsha
 * @Date:   2018-09-16T18:00:15+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T20:27:59+05:30
 */
import isValidEmail from "sane-email-validation";

export const validate = values => {
  const errors = {};
  if (!values.userSignUpEmail) {
    errors.userSignUpEmail = "Email is required";
  } else if (!isValidEmail(values.userSignUpEmail)) {
    errors.userSignUpEmail = "Enter a valid email";
  }
  if (!values.userSignUpMobile) {
    errors.userSignUpMobile = "Mobile number is required";
  } else if (!values.userSignUpMobile.match(/^[0-9]*$/)) {
    errors.userSignUpMobile = "Mobile number is not valid";
  }
  return errors;
};
