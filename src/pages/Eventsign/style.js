import {styled} from "@stitches/react"

export const StyledEventsign = styled("Eventsign", {
    "#pagina": {
        width: "97.8%",
        height: "100%",
        display: "flex",
        height: "100%",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        marginTop: "0px",
        padding: "15px",
        backgroundColor: "#3b908d",
    },
    
    "#painel": {
        border: "1px solid transparant",
        padding: "40px",
        borderRadius: "15px",
        backgroundColor: "#e9dced",
        boxShadow: "0px 0px 5px #222 "

    },
    "#painel a": {
        display: "flex",
        justifyContent: "center"
    },
    "#painel label": {
        fontFamily: "monospace",
        fontSize: "18px",
        marginLeft: "37px"
    },
    "#painel h2": {
        fontFamily: "monospace",
        fontSize: "18px"
    },

    "#painel input": {
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #222",
        height: "23px",
        fontFamily: "monospace",
        width: "250px",
        marginLeft: "37px"
    },
    "#painel img": {
        width: "250px",
        marginLeft: "35px"
    },

    "#painel button": {
        marginLeft: "110px",
        fontFamily: "monospace",
        height: "35px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        borderRadius: "8px",
        marginBottom: "10px",
        cursor: "pointer",
        transition: "0.3s"
    },
    "#painel button:hover": {

        border: "1px solid black",
        borderRadius: "10px"
        
    }

})