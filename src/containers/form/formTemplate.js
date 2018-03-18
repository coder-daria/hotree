//Dependencies
import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  const { title, content } = props;
  return (
    <div>
      <h2>{title}</h2>
      {content}
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequire
};

export default Form;
