//Dependencies
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  flex-basis: 25%;
`;

export const AdditionalInfo = styled.span`
  display: ${props => (props.isVisible ? "flex" : "none")};
`;

export const Content = styled.div`
  width: 62%;
`;
