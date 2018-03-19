//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

const SelectInput = props => {
  const { label, options, defaultOption, additionalInfo } = props;
  return (
    <div>
      <label>{label}</label>
      <select onChange={e => console.log("selected!")} required>
        <optgroup label="Me">
          <option defaultValue="">{defaultOption}</option>
        </optgroup>
        <optgroup label="Others">
          {options.map(option => {
            return (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </optgroup>
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
