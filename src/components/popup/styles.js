//Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.isVisible ? "flex" : "none")};
  width: 200px;
  height: 50px;
  position: absolute;
  top: 50px;
  left: 300px;
  background-color: white;
`;
