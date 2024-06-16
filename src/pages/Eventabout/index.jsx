import React from "react";
import { StyledEventabout } from "./style"
import BackButton from '../../components/BackButton';
import Header from '../../components/Header'
import Image from "../../assets/image.jpeg"

import Share from "../../assets/Share.png"
import Sino from "../../assets/sino.png"
import Group from "../../assets/group.png"

export default function Eventabout() {
    
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

        <StyledEventabout>
            <section id="pagina">
            <BackButton /> 

                <div id="painel">
                    <h1>{nome}</h1>
                    <nav id="inicio">
                        <p><img src={Group} alt="" /></p>
                        <p id="numero_pessoas">{quantidade}</p>
                        <p><img src={Share} alt="" /></p>
                        <p><img src={Sino} alt="" /></p>
                    </nav>
                    <img id="imagemEvento" src={Image} alt="" />
                    <nav id="fim">
                        <p>{data} |</p> 
                        <p>{horario} |</p>
                        <p>{local} |</p>
                        <p>{categoria}</p>

                    </nav>
                    <h3>Descrição do Evento</h3>
                    <p>{info}</p>

                    <br />

                    <a id="participar" href="/subscribe">Participar</a>
                    
                </div>
            </section>
                        
        </StyledEventabout>
    )
}
