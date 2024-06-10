import React from "react";
import { StyledLogin } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";


export default function Login() {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    let listaEmail = ['and.leao@gmail.com'];
    let listaPassword = ['123'];

    function email(e) {
        setInput1(e.target.value);
        // listaEmail.push(e)
    }

    function password(d) {
        setInput2(d.target.value);
        // listaPassword.push(e)
    }


    const shoot = () => {

        if (listaEmail.includes(input1) && listaPassword.includes(input2)) {
            window.location.href = "/home"
        }
        else {
            alert("Email ou Senha está incorreta");
        }

    }
    

    return (
        <StyledLogin>

            <section id="pagina">
                <div id="welcomesite">
                    <h1 >Eventify</h1>
                </div>
                <div id="form">
                    <h3>LOGIN</h3>
                    <label htmlFor="">Email</label> <br />
                    <input type="email" value={input1} onInput={email} placeholder="fulano@gmail.com" /> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" value={input2} onInput={password} placeholder="12345#"/> <br />
                    <button onClick={shoot} >Entrar</button> <br />
                    <a href="/cadastro">Não tem Cadastro?</a>
                    
                </div>

            </section>

            
        </StyledLogin>
    )
}

