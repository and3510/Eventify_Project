import React from "react";
import { StyledCadastro } from "./style"
import { useState } from "react";


// localStorage.clear()


export default function Cadastro() {

  /*const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/; 
    if (value.length <= 50 && regex.test(value)) {
      setName(value);
      setNameError('');
    } else if (!regex.test(value)) {
      setNameError('O nome deve conter apenas letras e espaços.');
    } else {
      setNameError('O nome não pode ter mais de 50 caracteres.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      console.log('Nome', name);
      console.log('E-mail', email);
      console.log('Telefone', phone);
      navigate('/thank-you');
    }
  };
    */

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");

    function name(n) {
        setInput1(n.target.value);

        // listaPassword.push(e)
    }

    function email(e) {
        setInput2(e.target.value);

        // listaEmail.push(e)
    }



    function password1(d) {
        setInput3(d.target.value);

        // listaPassword.push(e)
    }


    function password2(r) {
        setInput4(r.target.value);

        
        // listaPassword.push(e)
    }

    

    
    const shoot = () => {

        

        if (input1.length == 0 || input2.length == 0  || input3.length  == 0 || input4.length == 0 ) {
            alert("Prenche todos!");

        }
        else if (input3 != input4) {
            alert("Senha diferentes")
        }
        else {

            let dados = {
                nome: input1,
                email: input2,
                senha: input3,
            };

            
            localStorage.setItem(`usuario1`, JSON.stringify({dados}));

            window.location.href="/"

        }

    }
    

    return (
        <StyledCadastro>
            <section id="pagina">
                <div id="form">
                    <h3>Crie sua Conta</h3>
                    <label htmlFor="">Nome</label>  <br />
                    <input type="text" value={input1} onInput={name} placeholder="Digite seu nome"/> <br />
                    <label htmlFor="" >Email</label> <br />
                    <input type="email" value={input2} onInput={email} placeholder="Digite seu email"/> <br />
                    <label htmlFor="">Senha</label> <br />
                    <input type="password" value={input3} onInput={password1}  placeholder="Digite sua senha" /> <br />
                    <label htmlFor="">Confirmar Senha</label> <br />
                    <input type="password" value={input4} onInput={password2}  placeholder="Repita a senha" /> <br />
                    <button onClick={shoot} >Cadastrar-se</button> <br />
                    <a href="/"> Já tem uma Conta?</a>
                </div>
                <div id="welcomesite">
                    <h1>Eventify</h1>
                </div>
            </section>
        </StyledCadastro>
    )
}

