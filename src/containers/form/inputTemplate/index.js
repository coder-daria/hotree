//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { Container, Label, Content } from "./styles";

const InputTemplate = props => {
  const { label, content } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <Content>{content}</Content>
    </Container>
  );
};

InputTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.element.isRequire,
  displayColumn: PropTypes.bool,
  isVisible: PropTypes.bool
};

export default InputTemplate;
