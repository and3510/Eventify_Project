import {styled} from "@stitches/react"

export const StyledCadastro = styled("Cadastro", {
    "#pagina": {
        width: "97.8%",
        height: "100%",
        display: "flex",
        borderBottom: "1px solid #222",
        borderTop: "1px solid #222",
        height: "100%",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        marginTop: "10px",
        padding: "15px",
        backgroundColor: "#124e60",
        boxShadow: "1px 1px 4px #124e60",
        borderRadius: "7px",
    },
    
    "#form": {
        border: "1px solid transparant",
        padding: "40px",
        borderRadius: "15px",
        backgroundColor: "#e9dced",

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
        marginLeft: "80px",
        fontFamily: "monospace",
        height: "35px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        borderRadius: "8px",
        marginBottom: "10px",
        cursor: "pointer",
        transition: "0.3s"
    },
    "#form button:hover": {

        border: "1px solid black",
        borderRadius: "10px"
        
    }

})