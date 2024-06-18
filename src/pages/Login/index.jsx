import React from "react";
import { StyledLogin } from "./style";
import { useState } from "react";


// localStorage.clear()


export default function Login() {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");


    function email(e) {
        setInput1(e.target.value);
        // listaEmail.push(e)
    }

    function password(d) {
        setInput2(d.target.value);
        // listaPassword.push(e)
    }



    const shoot = () => {

        const storedUsuario = localStorage.getItem('usuario1');
        const jsonData = JSON.parse(storedUsuario);
        const dadosObject = jsonData.dados;
        const email1 = dadosObject.email;
        const senha = dadosObject.senha;

 

        if (input1 == email1 && input2 == senha && localStorage.getItem('usuario1') && (input1.length > 0 && input2.length > 0 ) ) {
           window.location.href="/home";

           const dados2 = {}
            localStorage.setItem(`create_evento`, JSON.stringify({dados2}));

            const removido = {
                erro: 0,
            }

            localStorage.setItem(`remover`, JSON.stringify({removido}));

        }

        else {

           alert("Senha ou Email incorreto")
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

