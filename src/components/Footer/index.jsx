import React from "react";
import {StyledFooter} from './style';



export default function Footer() {
    return (
        <StyledFooter>

            <section id="footer"> 
                <nav>
                    <h2>Contatos:</h2>
                    <ul>
                        <li>
                            Telefone: 86 99999-9999
                        </li>
                        <li>
                            Email: eventify@gmail.com
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h2>Sobre:</h2>
                    <p>Eventify - site que organiza e facilita os eventos dos participantes </p>
                    
                </nav>
            </section>
            
        </StyledFooter>
    )
}