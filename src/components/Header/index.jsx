import React from "react";
import {StyledHeader} from './style';



export default function Header() {
    return (
        <StyledHeader>

            <section id="header"> 
            <h1><a href="/"> IMAGE-ICON</a></h1>
            
            <nav id="paginas">
                <a href="/login">Login</a> 
                <a href="/cadastro">Cadastro</a>
            </nav>
            </section>
            
        </StyledHeader>
    )
}