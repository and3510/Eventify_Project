import React from 'react';
import './EventDetails.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaBell, FaShareAlt } from 'react-icons/fa';

function EventDetails() {

  const storedUsuario = localStorage.getItem('pagina_evento');
  const jsonData = JSON.parse(storedUsuario);
  const dadosObject = jsonData.pagina;
  const nome = dadosObject.nome;
  const data = dadosObject.data;
  const horario = dadosObject.horario;
  const categoria = dadosObject.categoria;
  const info = dadosObject.info;
  const local = dadosObject.local;
  const quantidade = dadosObject.quantidade;

  return (
    <section className="event-details center-text">
      <div className="event-header">
        <h1>{nome}</h1>
        <div className="event-image">
          <img src="https://via.placeholder.com/600x300" alt="Evento" />
          <div className="event-icons">
            <FaBell className="icon" />
            <FaShareAlt className="icon" />
          </div>
        </div>  
      </div>
      <div className="event-info">
        <p><FaMapMarkerAlt className="info-icon" /> {local}</p>
        <p><FaCalendarAlt className="info-icon" /> {data}</p>
        <p><FaClock className="info-icon" /> {horario}</p>
        <p><FaUser className="info-icon" /> {quantidade} participantes</p>
      </div>
      <h2>Descrição do Evento</h2>
      <div className="event-description">
        
        <p>{info}</p>
        
      </div>
      <br />
      <a href="/subscribe" className="participate-button" > Participar</a>

    </section>
  );
}

export default EventDetails;
