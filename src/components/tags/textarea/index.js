//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { Container, CharactersInfo, Span } from "./styles";

class TextareaContainer extends React.Component {
  state = {
    numOfCharacters: 0
  };

  countCharacters(event) {
    const numOfCharacters = event.target.value.length;
    this.setState({ numOfCharacters });
  }

  render() {
    const { name, placeholder, maxLength, isRequired } = this.props;
    const { numOfCharacters } = this.state;
    return (
      <Container>
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={event => this.countCharacters(event)}
          maxLength={maxLength}
          required={isRequired}
        />
        <CharactersInfo>
          <Span>{`Max length ${maxLength} characters`}</Span>
          <Span>{`${numOfCharacters}/140`}</Span>
        </CharactersInfo>
      </Container>
    );
  }
}

TextareaContainer.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  isRequired: PropTypes.bool
};

export default TextareaContainer;
