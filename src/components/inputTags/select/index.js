//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

const SelectInput = props => {
  const { label, options, additionalInfo } = props;
  return (
    <div>
      <label>{label}</label>
      <select onChange={e => console.log("selected!")}>
        <option defaultValue="" hidden>
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

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  additionalInfo: PropTypes.string
};

export default SelectInput;
