//Dependencies
import React from "react";
import PropTypes from "prop-types";

const RadioInput = props => {
  const { label, options, name } = props;
  return (
    <div>
      <label>{label}</label>
      {options.map(option => {
        return (
          <div key={option}>
            <input type="radio" name={name} value={option} />
            <label>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

RadioInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default RadioInput;
