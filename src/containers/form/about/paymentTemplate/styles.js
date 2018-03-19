//Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const FeeContainer = styled.div`
  visibility: ${props => (props.isVisible ? "block" : "hidden")};
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  padding-left: 5px;
`;
