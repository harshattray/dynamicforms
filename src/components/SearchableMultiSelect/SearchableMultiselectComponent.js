/**
 * @Author: harsha
 * @Date:   2018-09-16T18:08:41+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-16T18:36:21+05:30
 */

import React from "react";
import { Form } from "semantic-ui-react";

/**
 * [renderSearchableMultiSelect description]
 * @param  {[type]} name        [description]
 * @param  {[type]} options     [description]
 * @param  {[type]} placeholder [description]
 * @param  {[type]} input       [description]
 * @param  {[type]} onChange    [description]
 * @param  {[type]} input       [description]
 * @return {[type]}             [description]
 */

export const renderSearchableMultiSelect = ({
  name,
  options,
  placeholder,
  input: { value, onChange, ...input }
}) => {
  function handleSearchableMultiSelect(e, data) {
    return onChange(data.value) || input.onChange(value);
  }
  return (
    <Form.Dropdown
      name={name}
      placeholder={placeholder}
      fluid
      search
      multiple
      selection
      options={options}
      onChange={handleSearchableMultiSelect}
      {...input}
    />
  );
};
