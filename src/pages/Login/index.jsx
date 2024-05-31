import React from "react";
import { StyledLogin } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Login() {
    return (
        <StyledLogin>
            <Header />
            <section id="pagina">
                <div id="form">
                    <h3>Login</h3>
                    <label htmlFor="">Email</label> <br />
                    <input type="email" /> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" /> <br />
                    <button>Entrar</button> <br />
                    <a href="/cadastro">Não tem Login?</a>
                    
                </div>
            </section>
            <Footer />
            
        </StyledLogin>
    )
}

