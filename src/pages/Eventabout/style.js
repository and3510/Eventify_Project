import {styled} from "@stitches/react"

export const StyledEventabout = styled("Eventabout", {
    "#pagina": {
        width: "100.8%",
        display: "flex",
        height: "108%",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        padding: "15px",
        backgroundColor: "transparent",
    },
    
    "#painel": {
        width: "70%",
        border: "1px solid transparant",
        padding: "40px",
        borderRadius: "15px",
        backgroundColor: "#46567C",
        boxShadow: "0px 0px 5px #222 ",
        display: "block",

    },
    "#painel h1,h3": {
        display: "flex",
        justifyContent: "center",
        color: "#fff"
    },
    "#fim": {
        display: "flex",
        justifyContent: "center"

    },
    "#inicio": {
        display: "flex",
        justifyContent: "center"
    },
    "#inicio p": {
        color: "#fff",
        marginRight: "20px",
    },
    "#inicio p img": {
        width: "30px"
    },
    "#numero_pessoas": {
        marginLeft: "-15px",
        marginTop: "25px"
    },
    "#fim p": {
        color: "#fff",
        textAlign: "center",
        marginLeft: "20px"
        
    },
    "#imagemEvento": {
        width: "450px",
        marginLeft: "230px",
        borderRadius: "10px",
        boxShadow: "1px 1px 3px #222"

    },
    "#painel p": {
        textAlign: "center",
        color: "#fff"
    },
    "#participar": {
        fontFamily: "monospace",
        height: "50px",
        backgroundColor: "#fff",
        border: "1px solid transparent",
        borderRadius: "8px",

        cursor: "pointer",
        transition: "0.2s",
        marginBottom: "15px",
        width: "260px",
        backgroundColor: "rgba(52, 151, 62, 1)",
        color: "#fff",
        marginLeft: "70px",
        marginTop: "30px",
        marginLeft: "310px"

    },
    "#participar:hover": {

        backgroundColor: "#2d7e33",
 
    }



})