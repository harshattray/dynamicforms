/**
 * @Author: harsha
 * @Date:   2018-09-16T22:15:13+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T22:16:27+05:30
 */

import React from "react";
import { Form, Loader } from "semantic-ui-react";

export const renderUploadField = ({
  label,
  type,
  name,
  input: { value, onChange, ...input },
  meta: { touched, error, warning }
}) => {
  return <Form.Input type={type} {...input} />;
};
