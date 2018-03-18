//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom

class Textarea extends React.Component {
  state = {
    numOfCharacters: 0
  };

  countCharacters(event) {
    const numOfCharacters = event.target.value.length;
    this.setState({ numOfCharacters });
  }

  render() {
    const { label, text, isRequired, maxLength } = this.props;
    const { numOfCharacters } = this.state;
    return (
      <div>
        <label>{label}</label>
        <textarea
          placeholder={text}
          onChange={event => this.countCharacters(event)}
          required={isRequired}
          maxLength={maxLength}
        />
        <div>
          <span>{`Max length ${maxLength} characters`}</span>
          <span>{`${numOfCharacters}/140`}</span>
        </div>
      </div>
    );
  }
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  maxLength: PropTypes.string.isRequired
};

export default Textarea;
