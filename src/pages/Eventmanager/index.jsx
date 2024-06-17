import React from "react";
import { StyledEventmanager } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import Performance from '../../components/Performance';
import List from '../../components/listdict'

export default function Eventmanager() {
    return (
        <StyledEventmanager>
            <Header />
            <br />
            <section className="pagina">
                <div className="titulo">
                    <BackButton />
                    <h1><b>Gerenciamento do Evento</b></h1>
                    
                </div>
                <div className="conteudo" display="flex">
                    <div className="desempenho_evento">
                        <h1>Relátorio</h1>
                        <Performance />
                    </div>
                    <div className="inscrições">
                        <h1>Inscrições</h1>
                        <List />
                    </div>
                </div>


            </section>

        </StyledEventmanager>
    )
}