//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

class InputTemplate extends React.PureComponent {
  render() {
    const {
      label,
      type,
      name,
      placeholder,
      pattern,
      checked,
      onChange,
      additionalInfo,
      isRequired
    } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          required={isRequired}
        />
        <span>{additionalInfo}</span>
      </div>
    );
  }
}

InputTemplate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  additionalInfo: PropTypes.string,
  isRequired: PropTypes.bool
};

export default InputTemplate;
