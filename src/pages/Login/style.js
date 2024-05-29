import {styled} from "@stitches/react"

export const StyledLogin = styled("Login", {
    "#pagina": {
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
    },
    
    "#form": {
        border: "2px solid #222",
        padding: "40px",
        borderRadius: "15px"

    },

    "#form label": {
        fontFamily: "monospace",
        fontSize: "14px"
    },

    "#form input": {
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #222",
        height: "20px",
        fontFamily: "monospace"
    },

    "#botao-submit": {
        marginLeft: "48px",
        fontFamily: "monospace",
        height: "35px"
    }


})