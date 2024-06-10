import React, { useState } from 'react';
import { Container, FormContainer, Title, Form, Label, Input, Button } from './style'; // Importando os estilos atualizados
import { useNavigate } from 'react-router-dom';

const EventSubscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Nome', name);
    console.log('E-mail', email);
    console.log('Telefone', phone);
    navigate('/thank-you'); 
  };

  return (
    <Container>
      <FormContainer>
        <Title>Inscreva-se no Evento</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input 
            type="text" 
            placeholder="Digite seu nome"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
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
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
          <Button type="submit">Inscrever-se</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default EventSubscribe;
