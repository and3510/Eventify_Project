import React from "react";
import { StyledHome } from "./style"
import Calendar from "../../assets/calendar.webp"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Eventos = ["Pokemon GO", "Campus Party", "Festa na AABB"];


export default function Home() {
    return (
        <StyledHome>
            <Header />
            <section id="menu">

                <div id="eventos_principais">
                    <h3>Eventos</h3>
                    <a href="/eventsign">{Eventos[0]}</a> 
                    <a href="/eventsign">{Eventos[1]}</a> 
                    <a href="/eventsign">{Eventos[2]}</a>
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

