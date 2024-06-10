import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.7vh;
  background-color: #008080;
  font-family: 'Inter', sans-serif;
`;

export const FormContainer = styled.div`
  background-color: #46567C; 
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.6);
  width: 400px;
  height: 500px;
`;

export const Title = styled.h1`
  font-weight: 1px;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
  width: 190px;
  margin-left: 105px;
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
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #2d7e33;
  }
`;
