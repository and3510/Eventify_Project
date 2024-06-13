import {styled} from "@stitches/react"

export const StyledEventcreate = styled("Eventcreate", {
    "#pagina": {
        width: "100.8%",
        display: "flex",
        height: "108%",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        padding: "15px",
        backgroundColor: "#46567C",
    },
    
    "#painel": {
        width: "400px",
        border: "1px solid transparant",
        padding: "40px",
        borderRadius: "15px",
        backgroundColor: "#2F4858",
        boxShadow: "0px 0px 5px #222 ",
        display: "block"

    },
    "#painel h1": {
        display: "flex",
        justifyContent: "center",
        color: "#fff"
    },
    "#painel label": {
        fontFamily: "monospace",
        fontSize: "18px",
        marginLeft: "36px",
        color: "#fff"
    },

    "#painel input": {
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #222",
        height: "23px",
        fontFamily: "monospace",
        width: "350px",
        marginLeft: "37px",
        marginTop: "7px"
    },
    "#painel textarea": {
        marginTop: "7px",
        marginLeft: "35px",
        width: "350px",
        height: "50px",
        borderRadius: "8px",
        border: "1px solid #222",
    },
    "#painel select": {
        marginTop: "7px",
        marginBottom: "15px",
        marginLeft: "35px",
        width: "350px",
        height: "30px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #222",

    },
    "#painel img": {
        width: "250px",
        marginLeft: "28px"
    },

    "#painel button": {
        fontFamily: "monospace",
        height: "50px",
        backgroundColor: "#fff",
        border: "1px solid transparent",
        borderRadius: "8px",
        marginBottom: "10px",
        cursor: "pointer",
        transition: "0.2s",
        marginBottom: "15px",
        width: "260px",
        backgroundColor: "rgba(52, 151, 62, 1)",
        color: "#fff",
        marginLeft: "70px",
        marginTop: "30px"
    },
    "#painel button:hover": {


        border: "1px solid rgba(52, 151, 62, 30)",
        borderRadius: "10px",
        height: "55px",
        fontWeight: "bolder"
        
    }


})