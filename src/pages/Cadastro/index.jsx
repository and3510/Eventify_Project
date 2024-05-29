import React from "react";
import { StyledCadastro } from "./style"
import Header from "../../components/Header"

export default function Cadastro() {
    return (
        <StyledCadastro>
            <Header />
            <section id="pagina">
                <div id="form">
                    <label htmlFor="">Nome</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Email</label> <br />
                    <input type="email" /> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" /> <br />
                    <label htmlFor="">Repetir Senha</label> <br />
                    <input type="password" /> <br />
                    <input id="botao-submit" type="button" value="Cadastrar" />
                </div>
            </section>
            
        </StyledCadastro>
    )
}

