import React from "react";
import { StyledCadastro } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


export default function Cadastro() {
    return (
        <StyledCadastro>
            <Header />
            <section id="pagina">
                <div id="form">
                    <h3>Cadastro</h3>
                    <label htmlFor="">Nome</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Email</label> <br />
                    <input type="email" /> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" /> <br />
                    <label htmlFor="">Repetir Senha</label> <br />
                    <input type="password" /> <br />
                    <button>Cadastrar</button>
                </div>
            </section>
            <Footer />
            
        </StyledCadastro>
    )
}

