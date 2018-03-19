//Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: ${props => (props.isVisible ? "20%" : "100%")};
`;

export const AdditionalInfo = styled.span`
  display: ${props => (props.isVisible ? "flex" : "none")};
  padding-left: 10px;
`;
