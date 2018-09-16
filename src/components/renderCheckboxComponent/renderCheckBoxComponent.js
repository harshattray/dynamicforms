/**
 * @Author: harsha
 * @Date:   2018-09-16T18:42:26+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T18:42:59+05:30
 */

import React from "react";
import { Form } from "semantic-ui-react";

/**
 * [renderCheckBox checbox handler and dispatcher]
 * @param  {[type]} name     [description]
 * @param  {[type]} label    [description]
 * @param  {[type]} input    [description]
 * @param  {[type]} onChange [description]
 * @param  {[type]} input    [description]
 * @return {[type]}          [description]
 */

export const renderCheckBox = ({
  name,
  label,
  input: { value, onChange, ...input },
  showMoreFields
}) => {
  function showMoreDispatcher(data) {
    showMoreFields(data);
    return onChange(data);
  }
  return (
    <Form.Checkbox
      label={label}
      {...input}
      defaultChecked={!!value}
      onChange={(e, data) => showMoreDispatcher(data.checked)}
    />
  );
};
