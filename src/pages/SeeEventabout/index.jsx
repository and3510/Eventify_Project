import React from "react";
import { StyledSeeEventabout } from "./style"
import Comment from '../../components/CommentsSection'
import Comment1 from '../../components/CommentsList'
import Detail from '../../components/EventDetails'

export default function SeeEventabout() {
    

    return (

        <StyledSeeEventabout> 
            <section id="pagina">
                <Detail />
                

            </section>
            <Comment1 />
            
            
                        
        </StyledSeeEventabout>
    )
}