/**
 * @Author: harsha
 * @Date:   2018-09-16T17:57:41+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T18:04:33+05:30
 */

import React from "react";
import { Form } from "semantic-ui-react";

/**
 * [renderMultiSelect multiSelectData handler]
 * @param  {[type]} name        [description]
 * @param  {[type]} options     [description]
 * @param  {[type]} placeholder [description]
 * @param  {[type]} input       [description]
 * @param  {[type]} onChange    [description]
 * @param  {[type]} input       [description]
 * @return {[type]}             [description]
 */

export const renderMultiSelect = ({
  name,
  options,
  placeholder,
  search,
  input: { value, onChange, ...input }
}) => {
  function handleMultiSelect(e, { value }) {
    return onChange(value);
  }
  return (
    <Form.Dropdown
      name={name}
      placeholder={placeholder}
      fluid
      multiple
      selection
      options={options}
      onChange={handleMultiSelect}
      {...input}
    />
  );
};
