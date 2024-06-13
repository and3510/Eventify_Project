import React from "react";
import { StyledEventmanager } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Eventmanager() {
    return(
        <StyledEventmanager>
            <section className="pagina">
                <div className="titulo">
                <h1><b>Gerenciamento do evento</b></h1>
                </div>
                <div className="conteudo" display="flex">
                <div className="Desempenho_Evento">
                    <h1>Relátorio</h1>
                </div>
                <div className="Inscrições">
                    <h1>Inscrições</h1>
                </div>
                </div>

            
            </section>
            
        </StyledEventmanager>
    )}