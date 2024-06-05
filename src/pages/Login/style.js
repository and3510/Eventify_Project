import {styled} from "@stitches/react"

export const StyledLogin = styled("Login", {
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
    
    "#form": {
        border: "1px solid transparant",
        padding: "40px",
        borderRadius: "15px",
        backgroundColor: "#e9dced",
        boxShadow: "0px 0px 5px #222 "

    },
    "#form h3": {
        marginTop: "-1px",
        textAlign: "center",
        fontFamily: "monospace"
    },

    "#form label": {
        fontFamily: "monospace",
        fontSize: "18px"
    },

    "#form input": {
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #222",
        height: "23px",
        fontFamily: "monospace",
        width: "250px"
    },

    "#form button": {
        marginLeft: "90px",
        fontFamily: "monospace",
        height: "35px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        borderRadius: "8px",
        marginBottom: "10px",
        cursor: "pointer",
        transition: "0.3s",
        marginBottom: "15px"
    },
    "#form button:hover": {

        border: "1px solid black",
        borderRadius: "10px",
        
        
    },
    "#form a": {
        marginLeft: "50px",
        fontSize: "17px"
        
    }


})