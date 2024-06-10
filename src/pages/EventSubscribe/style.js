import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #008080;
  font-family: 'Inter', sans-serif;
`;

export const FormContainer = styled.div`
  background-color: #46567C; 
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 400px;
  height: 500px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
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
  &:hover {
    background-color: #2d7e33;
  }
`;

