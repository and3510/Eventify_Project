import { useState } from 'react';
import { Container, Form, Input, Button } from './style';
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
        <label>
          Nome:
          <Input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Telefone:
          <Input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </label>
        <Button type="submit">Inscrever-se</Button>
      </Form>
    </Container>
  );
};

export default EventSubscribe;
