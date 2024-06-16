import React from "react";
import { StyledEventcreate } from "./style"
import BackButton from '../../components/BackButton';

export default function Eventcreate() {
    /*
        const [nameEvent, setNameEvent] = useState('');
        const [categoria, setCategoria] = useState('');
        const [data, setData] = useState('');
        const [time, setTime] = useState('');
        const [local, setLocal] = useState('');
        const [numero, setNumero] = useState('');
        const [info, setInfo] = useState('');

    */

    return (

        
        
        <StyledEventcreate>
            
            <section id="pagina">
            <BackButton /> 
            
                <div id="painel">
                    
                    <h1>Criar Novo Evento</h1>
                    <form action="">
                    <label htmlFor="">Nome do Evento</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Categoria</label> <br />
                    <select >
                        <option >nenhum</option>
                        <option >Games</option>
                        <option >Futebol</option>
                        <option >Musica</option>
                        <option >Festa</option>
                    </select> <br />
                    <label htmlFor="">Data</label> <br />
                    <input type="date" /> <br />
                    <label htmlFor="">Horario</label> <br />
                    <input type="time" /> <br /> 
                    <label htmlFor="">Local</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Numero de Participantes</label> <br />
                    <input type="number" /> <br />
                    <label htmlFor="">Descrição</label> <br /> 
                    <textarea name="" id=""></textarea> <br />

                    <button id="criarEvento">Criar o evento</button>
                    </form>
                </div>
            </section>
                        
        </StyledEventcreate>
    )
}
