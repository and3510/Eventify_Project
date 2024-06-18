import React from "react";
import {StyledHeader} from './style';
import Icon_Personal from "../../assets/icon_personal.png"
import {FaBell} from 'react-icons/fa';




export default function Header() {

    const storedUsuario = localStorage.getItem('usuario1');
    const jsonData = JSON.parse(storedUsuario);
    const dadosObject = jsonData.dados;
    const nome = dadosObject.nome;

    const limpar = () => {
        localStorage.clear()
     }

    return (
        <StyledHeader>

            <section id="header"> 
            
            <a href="/home"> Eventify</a>
            
            <nav id="paginas">
                
                <a href="/eventcreate">Criar Evento</a>
                <a href="/myevents" >Meus Eventos</a> 
                <a onClick={limpar} href="/">Log out</a>
                <a href=""><FaBell /></a>
                <img src={Icon_Personal} />
                <p>{nome}</p>
                
                
            </nav>
            </section>
            
        </StyledHeader>
    )
}