import React from "react";
import { StyledEventcreate } from "./style"
import BackButton from '../../components/BackButton';
import { useState } from "react";

export default function Eventcreate() {
    
        const [nameEvent, setNameEvent] = useState('');
        const [categoria1, setCategoria] = useState('');
        const [data1, setData] = useState('');
        const [time1, setTime] = useState('');
        const [local1, setLocal] = useState('');
        const [numero1, setNumero] = useState('');
        const [info1, setInfo] = useState('');

    

        function name(n) {
            setNameEvent(n.target.value);
        }

        function categoria(c) {
            setCategoria(c.target.value);
        }
        function data(d) {
            setData(d.target.value);
        }
        function time(t) {
            setTime(t.target.value);
        }
        function local(l) {
            setLocal(l.target.value);
        }
        function numero(nu) {
            setNumero(nu.target.value);
        }
        function info(i) {
            setInfo(i.target.value);
        }


        const create = () => {

            window.location.href="/home";
            const dados2 = {
            nome: nameEvent, 
            data: data1, 
            horario: time1, 
            categoria: categoria1,
            info: info1,
            local: local1,
            quantidade: numero1,
            removido: true

            }
            localStorage.setItem(`create_evento`, JSON.stringify({dados2}));
            
        }
    return (

        <StyledEventcreate>
            
            <section id="pagina">
            <BackButton /> 
            
                <div id="painel">
                    
                    <h1>Criar Novo Evento</h1>
                    <label htmlFor="">Nome do Evento</label> <br />
                    <input type="text" value={nameEvent} onInput={name} /> <br />
                    <label htmlFor="">Categoria</label> <br />
                    <select value={categoria1} onInput={categoria} >
                        <option >nenhum</option>
                        <option >Games</option>
                        <option >Futebol</option>
                        <option >Musica</option>
                        <option >Festa</option>
                    </select> <br />
                    <label htmlFor="">Data</label> <br />
                    <input type="date" value={data1} onInput={data} /> <br />
                    <label htmlFor="">Horario</label> <br />
                    <input type="time" value={time1} onInput={time}/> <br /> 
                    <label htmlFor="">Local</label> <br />
                    <input type="text" value={local1} onInput={local}  /> <br />
                    <label htmlFor="">Numero de Participantes</label> <br />
                    <input type="number" value={numero1} onInput={numero} />  <br />
                    <label htmlFor="">Descrição</label> <br /> 
                    <textarea name="" id="" value={info1} onInput={info}  ></textarea> <br />
                    <button id="criarEvento" onClick={create} >Criar o evento</button> 
                </div>
            </section>
                        
        </StyledEventcreate>
    )
}
