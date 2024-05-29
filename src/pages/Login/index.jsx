import React from "react";
import { StyledLogin } from "./style"
import Header from "../../components/Header"

export default function Login() {
    return (
        <StyledLogin>
            <Header />
            <section id="pagina">
                <div id="form">
                    <label htmlFor="">Email</label> <br />
                    <input type="email" /> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" /> <br />
                    <input id="botao-submit" type="button" value="Entrar" />
                </div>
            </section>
            
        </StyledLogin>
    )
}

