import React from "react";
import {StyledHeader} from './style';
import Icon_Personal from "../../assets/icon_personal.png"



export default function Header() {
    return (
        <StyledHeader>

            <section id="header"> 
            
            <a href="/"> Eventify</a>
            
            <nav id="paginas">
                <a href="/eventcreate">Criar Evento</a>
                <a >Gerenciar Eventos</a> 
                <a href="/login">Log out</a> 
                <img src={Icon_Personal} />
                
            </nav>
            </section>
            
        </StyledHeader>
    )
}