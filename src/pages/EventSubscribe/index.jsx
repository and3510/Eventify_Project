import React, { useState } from 'react';
import { Container, Form, Input, Button, Label } from './style'; // Importando os estilos atualizados
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
      <h1>Inscreva-se no Evento</h1>
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
    </Container>
  );
};

export default EventSubscribe;
