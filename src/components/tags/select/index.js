//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

const SelectTemplate = props => {
  const {
    label,
    name,
    defaultValue,
    options,
    additionalInfo,
    isRequired
  } = props;
  return (
    <div>
      <label>{label}</label>
      <select name={name} required={isRequired}>
        <option>{defaultValue}</option>
        {options.map(option => {
          return (
            <option key={option.name}>
              {option.name} {option.lastname}
            </option>
          );
        })}
      </select>
      <span>{additionalInfo}</span>
    </div>
  );
};

SelectTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  additionalInfo: PropTypes.string
};

export default SelectTemplate;
