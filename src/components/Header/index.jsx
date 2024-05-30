import React from "react";
import {StyledHeader} from './style';
import Icon_mapa from "../../assets/icon-event.png"



export default function Header() {
    return (
        <StyledHeader>

            <section id="header"> 
            
            <a href="/"> <img src={Icon_mapa} /></a>
            
            <nav id="paginas">
                <a href="">Criar Evento</a>
                <a href="/login">Login</a> 
                
            </nav>
            </section>
            
        </StyledHeader>
    )
}