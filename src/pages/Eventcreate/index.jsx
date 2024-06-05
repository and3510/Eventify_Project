import React from "react";
import { StyledEventcreate } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Imagem_evento from "../../assets/evente_image.png"

const Eventos = ["Pokemon GO", "Campus Party", "Festa na AABB"];

export default function Eventcreate() {
    return (
        <StyledEventcreate>
            <Header />
            <section id="pagina">
                <div id="painel">
                    <h1>Criar Evento</h1>
                    <img src={Imagem_evento} /> <br /> <br />
                    <label htmlFor="">Nome do Evento</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Data</label> <br />
                    <input type="date" /> <br />
                    <label htmlFor="">Horario</label> <br />
                    <input type="time" /> <br />
                    <button>Criar o evento</button>
                </div>
            </section>
            <Footer />
            
        </StyledEventcreate>
    )
}
