//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

class Input extends React.PureComponent {
  render() {
    const { label, type, text, additionalInfo, isRequired } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          placeholder={text}
          onChange={e => console.log(e.target.value)}
          required={isRequired}
        />
        <span>{additionalInfo}</span>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  isRequired: PropTypes.bool.isRequired
};

export default Input;
