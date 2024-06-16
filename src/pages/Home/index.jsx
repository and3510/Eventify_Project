import { StyledHome } from './style';
import CalendarComponent from '../../components/Calendar/Calendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Performance from '../../components/Performance';



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
    nome: 'Festa na AABB', 
    data: '10/08/24', horario: '17:45', id: '2',
  },
  {
    nome: 'Aniversario do Cristovam', 
    data: '32/10/24', horario: '23:99', id: '3',
  },
  ];
  localStorage.setItem(`evento`, JSON.stringify({dados}));




  const handleBotao1Click = (id) => {
    if (id == 0) {
    let pagina = {
      nome: 'Pixelmon', 
      data: '12/04/25', 
      horario: '20:45', 
      id: '0',
      categoria: "Games e Anime",
      info: 'Explorar um mundo vasto e vibrante cheio de Pokémon selvagens para capturar e treinar.',
      local: 'River side',
      quantidade: "100",
      image: "cristovam_evento.png"
    };
 
      localStorage.setItem(`pagina_evento`, JSON.stringify({pagina}));
      
    }
    else if (id == 1) {

    let pagina =  {
      nome: 'Campus Party', 
      data: '01/05/24', 
      horario: '20:45', 
      id: '1',
      categoria: "Tecnologia, Inovação e Games",
      info: 'Chamada para Aventura! A Campus Party te Convida para uma Jornada Inesquecível! Prepare-se para imergir em um universo de inovação, tecnologia e criatividade na Campus Party, o maior festival de tecnologia, empreendedorismo e ciência do mundo!',
      local: 'Centro de Convesões de teresina',
      quantidade: "300",
      image: "cristovam_evento.png"
    };

      localStorage.setItem(`pagina_evento`, JSON.stringify({pagina}));
    }

    else if (id == 2) {
      let pagina =  {
        nome: 'Festa na AABB', 
        data: '07/03/22', 
        horario: '20:45', 
        id: '2',
        categoria: "Bebida, Rock, Sports",
        info: 'É com imensa alegria que os convidamos para celebrar conosco a festa da AABB. Será uma noite, repleta de festas, com música, comida, bebida, diversão.',
        local: 'AABB Clube',
        quantidade: "500",
        image: "cristovam_evento.png"
      };
  
        localStorage.setItem(`pagina_evento`, JSON.stringify({pagina}));
    }
    else if (id == 3) {
      let pagina =  {
        nome: 'Aniversario do Cristovam', 
        data: '32/10/24', 
        horario: '23:99', 
        id: '3',
        categoria: "Aniversário",
        info: 'Cristovam ta precisando de companhia para o aniversario',
        local: 'Praia do Arrombado',
        quantidade: "157",
        image: "cristovam_evento.png"
      };
  
        localStorage.setItem(`pagina_evento`, JSON.stringify({pagina}));
    }
  };


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
              <a onClick={() => handleBotao1Click(dados.id)} href="/eventabout" >
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

