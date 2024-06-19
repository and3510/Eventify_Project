import React from 'react';
import './EventDetails.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsArchiveFill } from "react-icons/bs";
import Cris from '../assets/cristovam_evento.png'
import Barradas from '../assets/barradas.jpeg'
import Pokemon from '/src/assets/pokemon.webp'
import Aabb from '../assets/aabb.png'
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
                  {image==1 ? 
                  <div>
                    <img src={Cris} alt="" />
                  </div>
                    : image==2 ?
                    <div>
                      <img src={Barradas} alt="" />
                    </div>
                    : image==3 ?
                    <div>
                      <img src={Pokemon} alt="" />
                    </div>
                    : image==4 ?
                    <div>
                      <img src={Aabb} alt="" />
                    </div>
                    : <img src="https://via.placeholder.com/600x300" alt="Evento" />}
          </div>

          <div className="event-icons">
            <NotificationButton eventDate={data} />
            
          </div>
          <div id='compatilhar'>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=localhost:5173/seeeventabout" target='_blank'><FaLinkedin /></a>
            <a href="https://api.whatsapp.com/send?text=localhost:5173/seeeventabout" target='_blank'><FaWhatsapp /></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=localhost:5173/seeeventabout" target='_blank'><FaFacebook /></a>
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
      <a href="/subscribe" className="participate-button" > Participar</a>

    </section>
  );
}

export default EventDetails;
