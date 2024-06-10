// src/pages/EventSubscribe/style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #333333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  color: #555555;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
