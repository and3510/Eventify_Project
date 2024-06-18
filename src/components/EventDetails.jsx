import React from 'react';
import './EventDetails.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaShareAlt } from 'react-icons/fa';
import { BsArchiveFill } from "react-icons/bs";
import Cris from '../assets/cristovam_evento.png';
import Barradas from '../assets/barradas.jpeg';
import Pokemon from '../assets/pokemongo.png';
import Aabb from '../assets/aabb.png';
import NotificationButton from './NotificationButton';

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
  const image = dadosObject.image;

  return (
    <section className="event-details center-text">
      <div className="event-header">
        <h1>{nome}</h1>
        <div className="event-image">
          <div>
            {image === 1 ? <img src={Cris} alt="" /> :
             image === 2 ? <img src={Barradas} alt="" /> :
             image === 3 ? <img src={Pokemon} alt="" /> :
             image === 4 ? <img src={Aabb} alt="" /> :
             <img src="https://via.placeholder.com/600x300" alt="Evento" />}
          </div>
          <div className="event-icons">
            <NotificationButton eventDate={data} />
            <FaShareAlt className="icon" />
          </div>
        </div>  
      </div>
      <div className="event-info">
        <p><FaMapMarkerAlt className="info-icon" /> {local}</p>
        <p><FaCalendarAlt className="info-icon" /> {data}</p>
        <p><FaClock className="info-icon" /> {horario}</p>
        <p><FaUser className="info-icon" /> {quantidade} participantes</p> 
        <p><BsArchiveFill className="info-icon"  /> {categoria}</p>
      </div>
      <h2>Descrição do Evento</h2>
      <div className="event-description">
        <p>{info}</p>
      </div>
      <br />
      <a href="/subscribe" className="participate-button">Participar</a>
    </section>
  );
}

export default EventDetails;
