import React from "react";
import { StyledEventabout } from "./style"
import BackButton from '../../components/BackButton';
import Header from '../../components/Header'

import Detail from '../../components/EventDetails'

export default function Eventabout() {
    

    return (

        <StyledEventabout>
            <Header />
            <BackButton /> 
            <section id="pagina">
                <Detail />
                

            </section>
            
                        
        </StyledEventabout>
    )
}
