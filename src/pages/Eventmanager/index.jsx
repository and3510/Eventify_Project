import React from "react";
import { StyledEventmanager } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Eventmanager() {
    return (
        <StyledEventmanager>
            <section className="pagina">
                <div className="titulo">
                    <h1><b>Gerenciamento do Evento</b></h1>
                </div>
                <div className="conteudo" display="flex">
                    <div className="desempenho_evento">
                        <h1>Relátorio</h1>
                    </div>
                    <div className="inscrições">
                        <h1>Inscrições</h1>
                        <div className="inscrito">
                            <div className="text"> <h4>Gustavo A. do Vale
                                <br></br>quer participar do seu Evento!</h4></div>
                            <div class="botões" > <button type="button" class="aceita">Aceitar</button>
                                <button type="button" class="recusar">Recusar</button></div>
                        </div>
                    </div>
                </div>


            </section>

        </StyledEventmanager>
    )
}