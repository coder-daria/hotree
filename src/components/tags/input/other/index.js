//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { Container, Input, AdditionalInfo } from "./styles";

class InputWrapper extends React.PureComponent {
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
    const isInfoProvided = additionalInfo.length > 0 ? true : false;
    return (
      <Container>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          required={isRequired}
          isVisible={isInfoProvided}
        />
        <AdditionalInfo isVisible={isInfoProvided}>
          {additionalInfo}
        </AdditionalInfo>
      </Container>
    );
  }
}

InputWrapper.defaultProps = {
  additionalInfo: ""
};

InputWrapper.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  additionalInfo: PropTypes.string,
  isRequired: PropTypes.bool
};

export default InputWrapper;
