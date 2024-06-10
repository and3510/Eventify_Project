import React from "react";
import { StyledCadastro } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


export default function Cadastro() {
    return (
        <StyledCadastro>
            <section id="pagina">
                <div id="form">
                    <h3>Crie sua Conta</h3>
                    <label htmlFor="">Nome</label>  <br />
                    <input type="text" placeholder="Digite seu nome"/> <br />
                    <label htmlFor="">Email</label> <br />
                    <input type="email" placeholder="Digite seu email"/> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" placeholder="Digite sua senha" /> <br />
                    <label htmlFor="">Confirmar Senha</label> <br />
                    <input type="password" placeholder="Repita a senha" /> <br />
                    <button>Cadastrar-se</button> <br />
                    <a href="/"> Já tem uma Conta?</a>
                </div>
                <div id="welcomesite">
                    <h1>Eventify</h1>
                </div>
            </section>
        </StyledCadastro>
    )
}

