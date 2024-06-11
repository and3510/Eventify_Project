import { StyledHome } from './style';
import CalendarComponent from '../../components/Calendar/Calendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Eventos = ["Pokemon GO", "Campus Party", "Festa na AABB"];
const NameButtons = ["Localização", "Categoria", "Data"];

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <section id="menu">
        <div id="eventos_principais">
          <h3>Eventos</h3>
          <a href="/subscribe" data-evento="Pokemon GO">
            {Eventos[0]}
          </a>{" "}
          <br />
          <a href="/subscribe" data-evento="Campus Party">
            {Eventos[1]}
          </a>{" "}
          <br />
          <a href="/subscribe" data-evento="Festa na AABB">
            {Eventos[2]}
          </a>
        </div>

        <div id="calendar">
          <CalendarComponent /> 
          <nav>
            <ul>
              <button>{NameButtons[0]}</button> <br />
              <button>{NameButtons[1]}</button> <br />
              <button>{NameButtons[2]}</button>
            </ul>
          </nav>
        </div>
      </section>
    </StyledHome>
  );
}
