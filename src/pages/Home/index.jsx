import React from "react";
import { StyledHome } from "./style"
import Calendar from "../../assets/calendar.webp"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Home() {
    return (
        <StyledHome>
            <Header />
            <section id="menu">

                <div id="eventos_principais">
                    <h3>Eventos</h3>
                    <p>Pokemon GO</p>
                    <p>Campus Party</p>
                    <p>Festa na AABB</p>
                </div>

                <div id="calendar">
                    <img src={Calendar} />
                    <nav>
                        <ul>
                            <button>Localização</button>
                            <button>Categoria</button>
                            <button>Data</button>
                        </ul>
                    </nav>
                </div>
            </section>
            <Footer />
        
            
        </StyledHome>
    )
}

