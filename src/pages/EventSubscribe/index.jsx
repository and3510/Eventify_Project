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
    // Lógica para enviar os dados do formulário para o servidor
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    navigate('/thank-you'); // Redireciona para uma página de agradecimento após a inscrição
  };

  return (
    <Container>
      <FormContainer>
        <Title>Inscreva-se no Evento</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Nome:</Label>
          <Input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <Label>Email:</Label>
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Label>Telefone:</Label>
          <Input 
            type="text" 
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
