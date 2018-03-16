//Dependencies
import React from "react";
import PropTypes from "prop-types";

const Textarea = props => {
  const { label, text } = props;
  return (
    <div>
      <label>{label}</label>
      <textarea placeholder={text} onChange={() => console.log("textarea!")} />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Textarea;
