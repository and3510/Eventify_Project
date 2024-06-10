import React from "react";
import {StyledHeader} from './style';
import Icon_Personal from "../../assets/icon_personal.png"



export default function Header() {
    return (
        <StyledHeader>

            <section id="header"> 
            
            <a href="/home"> Eventify</a>
            
            <nav id="paginas">
                <a >Inscrições</a>
                <a href="/eventcreate">Criar Evento</a>
                <a >Gerenciar Eventos</a> 
                <a href="/">Log out</a> 
                <img src={Icon_Personal} />
                
            </nav>
            </section>
            
        </StyledHeader>
    )
}