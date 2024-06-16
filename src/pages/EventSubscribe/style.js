import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Inter', sans-serif;
`;

export const FormContainer = styled.div`
  position: relative; 
  background-color: #46567C; 
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 400px;
  height: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  width: 190px;
  margin: 0 auto 20px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #39435C;
  font-size: 16px;
  color: #FFFFFF;
  &::placeholder {
    color: #CCCCCC;
  }
`;

export const Button = styled.button`
  padding: 14px;
  border: none;
  border-radius: 8px;
  background-color: #34973E;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #2d7e33;
  }
`;
