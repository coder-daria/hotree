//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import {Container } from './styles';

const Form = props => {
  const { title, content } = props;
  return (
    <Container>
      <h2>{title}</h2>
      {content}
    </Container>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequire
};

export default Form;
