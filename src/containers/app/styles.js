//Dependencies
import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: rgb(59, 89, 140);
  border-top: 20px solid rgb(35, 59, 101);
  display: flex;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 40px;
  margin: 0;
  align-self: center;
  width: 80%;
  text-align: start;
  padding-left: 25px;
`;

export const FormContainer = styled.form`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
