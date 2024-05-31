import React from "react";
import { StyledCadastro } from "./style"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Imagem_evento from "../../assets/evente_image.png"

/*
const [linkClicado, setLinkClicado] = useState(false);

 
function verificarCliqueLink(link) {
    return linkClicado && link === 'https://www-example-com.cdn.ampproject.org/c/s/www.example.com'; // Substitua 'example.com' pelo link real
}

verificarCliqueLink('https://www-example-com.cdn.ampproject.org/c/s/www.example.com'); // Substitua 'example.com' pelo link real

if (linkClicado) {
  // Exibir mensagem ou realizar ação quando o link for clicado
  console.log('O link específico foi clicado!');
}

*/

export default function Eventsign() {
    return (
        <StyledCadastro>
            <Header />
            <section id="pagina">
                <div id="painel">
                    <a href="#" onClick={() => setLinkClicado(true)}>Link específico</a>
                    <h1>Evento: Pokemon GO</h1>
                    <img src={Imagem_evento} /> <br /> <br />
                    <label htmlFor="">Nome</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="">Telefone</label> <br />
                    <input type="tel" /> <br />
                    <button>Se Inscrever</button>
                </div>
            </section>
            <Footer />
            
        </StyledCadastro>
    )
}
