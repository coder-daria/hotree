//Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdditionalInfo = styled.span`
  display: ${props => (props.isVisible ? "flex" : "none")};
  font-size: 12px;
  color: rgb(209, 208, 208);
  font-style: italic;
  padding-top: 5px;
`;
