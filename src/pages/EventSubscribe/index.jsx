import React, { useState } from 'react';
import { Container, FormContainer, Title, Label, Input, Button } from './style';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import './estilo.css'

const EventSubscribe = () => {

  

  const [showInfo, setShowInfo] = useState(false);

    const handleButtonClick = () => {
    if (nome && email && phone) {
    setShowInfo(true);
    setTimeout(() => setShowInfo(false), 1500); // Tempo em milissegundos (5 segundos)

    setTimeout(function() {
          window.location.href="/home"
    }, 3000); // 5 segundos = 5000 milissegundos

  }
  };

  const storedUsuario = localStorage.getItem('pagina_evento');
  const jsonData = JSON.parse(storedUsuario);
  const dadosObject = jsonData.pagina;
  const nome = dadosObject.nome;

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




  return (
    <Container>
      <FormContainer>
        <BackButton /> 
        <Title>Inscrição do(a) {nome}</Title>
        <br />
        <div id='notificacao'>
        {showInfo && <p> {name} está inscrito</p>}
        </div>
        <section id='form'>
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
          <Button  onClick={handleButtonClick}>Inscrever-se</Button>
          </section>
      </FormContainer>
    </Container>
  );
};

export default EventSubscribe;
