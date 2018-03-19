//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

const SelectTemplate = props => {
  const { label, name, options, additionalInfo, isRequired } = props;
  return (
    <div>
      <label>{label}</label>
      <select name={name} required={isRequired}>
        <option value="" hidden>
          Select category (skills, interests, locations)
        </option>
        {options.map(option => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
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
  options: PropTypes.array.isRequired,
  additionalInfo: PropTypes.string
};

export default SelectTemplate;
