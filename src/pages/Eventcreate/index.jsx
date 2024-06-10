import React from "react";
import { StyledEventcreate } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Eventos = ["Pokemon GO", "Campus Party", "Festa na AABB"];

export default function Eventcreate() {
    return (
        <StyledEventcreate>
            <Header />
            <section id="pagina">
                <div id="painel">
                    <h1>Criar Novo Evento</h1>
                    <label htmlFor="">Nome do Evento</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Categoria</label> <br />
                    <select >
                        <option >nenhum</option>
                        <option >Games</option>
                        <option >Futebol</option>
                        <option >Musica</option>
                    </select> <br />
                    <label htmlFor="">Data</label> <br />
                    <input type="date" /> <br />
                    <label htmlFor="">Horario</label> <br />
                    <input type="time" /> <br />
                    <label htmlFor="">Numero de Participantes</label> <br />
                    <input type="number" /> <br />
                    <label htmlFor="">Descrição</label> <br />
                    <textarea name="" id=""></textarea> <br />
                    <button>Criar o evento</button>
                </div>
            </section>
            
        </StyledEventcreate>
    )
}
