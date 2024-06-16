import React from 'react';
import './style.css';
import BackButton from '../../components/BackButton';
import Info from '/src/assets/Info_alt.png'
import config from '/src/assets/Setting_vert.png'


export default function Myevents() {

    
    const storedUsuario = localStorage.getItem('create_evento');
    const jsonData = JSON.parse(storedUsuario);
    const dadosObject = jsonData.dados;
    const nome = dadosObject.nome;
    const data = dadosObject.data;
    const removido = dadosObject.removido;
    const horario = dadosObject.horario; 
    const categoria = dadosObject.categoria;
    const info = dadosObject.info;
    const local = dadosObject.local;
    const quantidade = dadosObject.quantidade;

      
      
      const removeEvent = () => {

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
          window.location.href="/myevents"
      };

      const handleBotao1Click = () => {
        let pagina = {
          nome: nome, 
          data: data, 
          horario: horario, 
          categoria: categoria,
          info: info,
          local: local,
          quantidade: quantidade,

          }
          localStorage.setItem(`pagina_evento`, JSON.stringify({pagina}));
          
      } 


    return (
        <section id="pagina">
            <BackButton /> 
            
                <div id="painel">
                <h1>Meus Eventos</h1>

                <div>
                  {removido ? 
                  <div id='eventos'> <p>{nome}  | {data}</p> <button onClick={removeEvent}>Remover</button> 
                  <div> <a href="/eventmanager"> <img src={config} alt="" /></a> 
                  <a onClick={handleBotao1Click} href="/eventabout"><img src={Info} alt="" /></a></div>
                  </div>
                    : <p>  </p>}
                </div>



                </div>
            </section>
    );
}
