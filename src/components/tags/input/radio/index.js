//Dependencies
import React from "react";
//Custom
import { Container, Content, Label } from "./styles";

const RadioInputs = props => {
  const { options, name, defaultChecked, onChange } = props;
  return (
    <Container>
      {options.map(option => {
        return (
          <Content>
            <input
              type="radio"
              name={name}
              value={option}
              onChange={e => onChange(e)}
              defaultChecked={defaultChecked === option}
              required
            />
            <Label key={option}>{option}</Label>
          </Content>
        );
      })}
    </Container>
  );
};

export default RadioInputs;
