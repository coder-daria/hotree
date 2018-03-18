//Dependencies
import styled from "styled-components";

export const FeeContainer = styled.div`
  visibility: ${props => (props.isVisible ? "block" : "hidden")};
`;
