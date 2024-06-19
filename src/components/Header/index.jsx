import React from "react";
import {StyledHeader} from './style';
import Icon_Personal from "../../assets/icon_personal.png"
import { FaBell} from 'react-icons/fa';
import E from '../../assets/E.png'




export default function Header() {

    const storedUsuario = localStorage.getItem('usuario1');
    const jsonData = JSON.parse(storedUsuario);
    const dadosObject = jsonData.dados;
    const nome = dadosObject.nome;


    return (
        <StyledHeader>

            <section id="header"> 
            
            <a href="/home"> <img src={E} alt="" /></a>
            
            <nav id="paginas">
                
                <a href="/eventcreate">Criar Evento</a>
                <a href="/myevents" >Meus Eventos</a> 
                <a href="/notification"> <FaBell /> </a>
                <a href="/">Log out</a>
                <img src={Icon_Personal} />
                <p>{nome}</p>
                
                
            </nav>
            </section>
            
        </StyledHeader>
    )
}