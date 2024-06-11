import React, { useState } from 'react';
import { Container, FormContainer, Title, Form, Label, Input, Button } from './style';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const EventSubscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/; 
    if (value.length <= 50 && regex.test(value)) {
      setName(value);
      setNameError('');
    } else if (!regex.test(value)) {
      setNameError('O nome deve conter apenas letras e espaços.');
    } else {
      setNameError('O nome não pode ter mais de 50 caracteres.');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\-()+\s]*$/;
    if (regex.test(value)) {
      setPhone(value);
      setPhoneError('');
    } else {
      setPhoneError('O telefone deve conter apenas números, "-", "(", ")" e "+".');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      console.log('Nome', name);
      console.log('E-mail', email);
      console.log('Telefone', phone);
      navigate('/thank-you');
    }
  };

  return (
    <Container>
      <FormContainer>
        <BackButton /> 
        <Title>Inscrição do Evento</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
          <Label>E-mail</Label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>Telefone</Label>
          <Input
            type="text"
            placeholder="Digite seu telefone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
          <Button type="submit">Inscrever-se</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default EventSubscribe;
