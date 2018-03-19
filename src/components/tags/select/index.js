//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { Container, AdditionalInfo } from "./styles";

const Select = props => {
  const {
    name,
    defaultValue,
    options,
    additionalInfo,
    isVisible,
    isRequired
  } = props;
  const isInfoProvided = additionalInfo.length > 0 ? true : false;
  return (
    <Container>
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
      <AdditionalInfo isVisible={isInfoProvided}>
        {additionalInfo}
      </AdditionalInfo>
    </Container>
  );
};

Select.defaultProps = {
  additionalInfo: ""
};

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  additionalInfo: PropTypes.string,
  isVisible: PropTypes.bool
};

export default Select;
