import React from "react";
import { StyledEventabout } from "./style"
import BackButton from '../../components/BackButton';
import Header from '../../components/Header'
import Comment from '../../components/CommentsSection'
import Comment1 from '../../components/CommentsList'
import Detail from '../../components/EventDetails'

export default function Eventabout() {
    

    return (

        <StyledEventabout>
            <Header />
            <BackButton /> 
            <section id="pagina">
                <Detail />
                

            </section>
            <Comment1 />
            <Comment />
            
                        
        </StyledEventabout>
    )
}
