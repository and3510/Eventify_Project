import React from 'react';
import './style.css';
import BackButton from '../../components/BackButton';
import Info from '/src/assets/Info_alt.png'
import config from '/src/assets/Setting_vert.png'
import { useState } from 'react';

export default function Myevents() {

    
    const storedUsuario = localStorage.getItem('create_evento');
    const jsonData = JSON.parse(storedUsuario);
    const dadosObject = jsonData.dados;
    const nome = dadosObject.nome;
    const data = dadosObject.data;
    const removido = dadosObject.removido;





    let dados = [ 
      {
        nome: 'Pixelmon', 
        data: '12/04/25', horario: '20:45', id: '0', removido: true,
      },
      {
        nome: 'Campus Party', 
        data: '01/05/24', horario: '20:45', id: '1', removido: true,
      },
      {
        nome: 'Festa na AABB', 
        data: '10/08/24', horario: '17:45', id: '2', removido: true,
      },
      {
        nome: 'Aniversario do Cristovam', 
        data: '32/10/24', horario: '23:99', id: '3', removido: true,
      },
      ];

      localStorage.setItem(`meus_eventos`, JSON.stringify({dados}));
      

      
      
      const removeEvent = () => {
        setIsLoggedIn(false); 
        const dados = {
          nome: '', 
          data: '', 
          horario: '', 
          categoria: '',
          info: '',
          local: '',
          quantidade: '',
          removido: false

          }
          localStorage.setItem(`create_evento`, JSON.stringify({dados}));
      };

      const removeOthers = () => {

        dados.removido = false;
      }


    return (
        <section id="pagina">
            <BackButton /> 
            
                <div id="painel">
                <h1>Meus Eventos</h1>
                {dados.map(function(dados) {
                return (

                    <div key={dados.id}>
                    {dados.removido ? 
                    <div id='eventos'>
                    <p>{dados.nome}  | {dados.data}</p>  <button onClick={removeOthers} >Remover</button>
                    <div> <a href=""> <img src={config} alt="" /></a> 
                    <a href=""><img src={Info} alt="" /></a></div>
                    </div>
                    : <p>  </p>}
                    
                    </div>


                )
                })}
                <div>
                  {removido ? 
                  <div id='eventos'> <p>{nome}  | {data}</p> <button onClick={removeEvent}>Remover</button> 
                  <div> <a href=""> <img src={config} alt="" /></a> 
                  <a href=""><img src={Info} alt="" /></a></div>
                  </div>
                    : <p>  </p>}
                </div>



                </div>
            </section>
    );
}
