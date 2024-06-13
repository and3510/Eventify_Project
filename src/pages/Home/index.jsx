import { StyledHome } from './style';
import CalendarComponent from '../../components/Calendar/Calendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



const NameButtons = ["Localização", "Categoria", "Data"];



export default function Home() {

  
  const dados = [ {
    nome: 'Pixelmon', 
    data: '12/04/25', horario: '20:45', id: '0',
  },
  {
    nome: 'Campus Party', 
    data: '01/05/24', horario: '20:45', id: '1',
  },
  {
    nome: 'Campus Party', 
    data: '01/05/24', horario: '20:45', id: '2',
  },
  ];
  localStorage.setItem(`evento`, JSON.stringify({dados}));
  // teste = localStorage.setItem(`evento`, JSON.stringify({dados}));

  /*let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

  const novoProduto = {nome: "Produto 4", data: '01/05/24', horario: '20:45', id: "5" };
  eventos.push(novoProduto);

  // Atualizar localStorage com o array atualizado
  localStorage.setItem('eventos', JSON.stringify(eventos));
  */

  const eventos = localStorage.getItem('evento');
  const valores = JSON.parse(eventos);
  const nome = valores.nome;
  const data = valores.data;
  const horario = valores.horario;

  /*function addEvent(idEvent) {
    let event = eventos.find(function(event) {
      return event.id == idEvent;
    });
  }
  */



  return (
    <StyledHome>
      <Header />

      <section id="menu">

        <div id="eventos_principais">
        <h1>Eventos Principais</h1>
        <nav>
        <h3>Eventos</h3>
        {dados.map(function(dados) {
          return (
            <div key={dados.id}>
              <a href="/subscribe" >
              {dados.nome} <br />
              {dados.data}-{dados.horario}
              </a>  
            </div>
          )
        })}
        </nav>
        </div>
        
        <div id="calendar">
          <h1>Calendario de Eventos</h1>
          <CalendarComponent /> 
          <nav>
            <ul>
              <button>{NameButtons[0]}</button> 
              <button>{NameButtons[1]}</button>
              <button>{NameButtons[2]}</button>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </StyledHome>

  );
}

