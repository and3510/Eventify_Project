import React from "react";
import {StyledHeader} from './style';
import Icon_Personal from "../../assets/icon_personal.png"



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
                <a >Inscrições</a>
                <a href="/eventcreate">Criar Evento</a>
                <a >Gerenciar Eventos</a> 
                <a onClick={limpar} href="/">Log out</a> 
                <img src={Icon_Personal} />
                <p>{nome}</p>
                
            </nav>
            </section>
            
        </StyledHeader>
    )
}