//Dependencies
import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
  const { label, text, additionalInfo } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={text}
        onChange={() => console.log("input")}
      />
      <span>{additionalInfo}</span>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string
};

export default TextInput;
