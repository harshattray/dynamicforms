/**
 * @Author: harsha
 * @Date:   2018-09-16T18:46:11+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T18:49:23+05:30
 */

import React from "react";
import { Form, Loader } from "semantic-ui-react";

/**
 * [renderDropdown Dropdown select handler]
 * @param  {[type]} label       [description]
 * @param  {[type]} placeholder [description]
 * @param  {[type]} name        [description]
 * @param  {[type]} options     [description]
 * @param  {[type]} input       [description]
 * @return {[type]}             [description]
 */

export const renderDropdown = ({
  label,
  placeholder,
  name,
  options,
  input
}) => {
  function handleSelect(e, { value }) {
    return input.onChange(value);
  }
  if (!options) {
    return <Loader inline active />;
  }
  return (
    <Form.Select
      fluid
      label={label}
      options={options}
      placeholder={placeholder}
      {...input}
      onChange={handleSelect}
    />
  );
};
