import { StyledHome } from './style';
import CalendarComponent from '../../components/Calendar/Calendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const NameButtons = ["Localização", "Categoria", "Data"];



export default function Home() {

  function check() {
    let dados = {
      nome: ["Pixelmon","Campus Party", "Festa na AABB"],
      data: ["12/04/25","01/05/24","05/06/23"],
      horario: ["20:45","19:25","10:25"]
    };
    localStorage.setItem(`evento`, JSON.stringify({dados}));

  };

  function grow() {
    
  }

  const storedUsuario = localStorage.getItem('evento');
  const jsonData = JSON.parse(storedUsuario);
  const dadosObject = jsonData.dados;
  const nome = dadosObject.nome;
  const data = dadosObject.data;
  const horario = dadosObject.horario;

  check();
  return (
    <StyledHome>
      <Header />
      <section id="menu">
      
        <div id="eventos_principais">
        <h1>Eventos Principais</h1>
        <nav>
          <h3>Eventos</h3>
          <a href="/subscribe" data-evento="Pokemon GO">
            {nome[0]} <br />
            {data[0]}-{horario[0]}
          </a>
          <br />
          <a href="/subscribe" data-evento="Campus Party">
            {nome[1]}<br />
            {data[1]}-{horario[1]}
          </a>
          <br />
          <a href="/subscribe" data-evento="Festa na AABB">
            {nome[2]} <br /> {data[2]}-{horario[2]}
          </a>
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
