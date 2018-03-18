//Dependencies
import React from "react";
//Custom
import { Container } from "./styles";

const Popup = props => (
  <Container isVisible={props.isVisible}>{props.text}</Container>
);

export default Popup;
