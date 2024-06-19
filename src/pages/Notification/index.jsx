import React from 'react';
import './style.css';
import BackButton from '../../components/BackButton';




export default function Notification() {


        const notificacoesArmazenadas = JSON.parse(localStorage.getItem('notice'));






    return (

        <section id="pagina">
            
            <BackButton /> 
            
                <div id="painel">
                <h1>Notificações</h1>

                {localStorage.getItem('notice') ?
                <div className="comment">

                    <p> {notificacoesArmazenadas.notificacoes[0].nome} - {notificacoesArmazenadas.notificacoes[0].data} - {notificacoesArmazenadas.notificacoes[0].local}</p>
                
                </div>
                :
                <div>
                <br />
                <p> Nenhuma notificação no momento</p>
                </div>
                }


                </div>
        </section>
    );
}
