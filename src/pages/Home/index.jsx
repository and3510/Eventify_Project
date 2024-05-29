import React from "react";
import { StyledHome } from "./style"
import Mapa from "../../assets/mapa.webp"
import Header from "../../components/Header"

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

                <div id="mapa">
                    <img src={Mapa} />
                </div>
            </section>
            
        </StyledHome>
    )
}

