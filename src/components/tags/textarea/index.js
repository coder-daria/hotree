//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { Container, Content } from "./styles";

class TextareaTemplate extends React.Component {
  state = {
    numOfCharacters: 0
  };

  countCharacters(event) {
    const numOfCharacters = event.target.value.length;
    this.setState({ numOfCharacters });
  }

  render() {
    const { label, name, placeholder, maxLength, isRequired } = this.props;
    const { numOfCharacters } = this.state;
    return (
      <Container>
        <label>{label}</label>
        <Content>
          <textarea
            name={name}
            placeholder={placeholder}
            onChange={event => this.countCharacters(event)}
            maxLength={maxLength}
            required={isRequired}
          />
          <div>
            <span>{`Max length ${maxLength} characters`}</span>
            <span>{`${numOfCharacters}/140`}</span>
          </div>
        </Content>
      </Container>
    );
  }
}

TextareaTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  isRequired: PropTypes.bool
};

export default TextareaTemplate;
