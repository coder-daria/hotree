//Dependencies
import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  background-color: rgb(59, 89, 140);
  height: 100px;
  display: flex;
  border-top: 20px solid rgb(35, 59, 101);
`;

export const H1 = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 40px;
  margin: 0;
  text-align: center;
  align-self: center;
  padding-left: 30%;
`;

export const FormContainer = styled.form`
  border: 2px solid black;
  height: calc(100% - 100px);
`;
