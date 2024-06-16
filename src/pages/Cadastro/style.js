import {styled} from "@stitches/react"

export const StyledCadastro = styled("Cadastro", {
    "#pagina": {
        width: "100%",
        height: "530px",
        display: "flex",
        fontFamily: "monospace",
        fontSize: "20px",
        padding: "15px",
        justifyContent: "space-evenly",
        marginTop: "30px",
        marginLeft: "-30px"
    },
    "#welcomesite": {
        backgroundColor: "transparent",
        alignContent: "center",
        color: "white",
        padding: "70px",
        fontFamily: "arial",
        fontSize: "55px",
        marginLeft: "125px"
    },
    
    "#form": {
        padding: "40px",
        backgroundColor: "rgba(70, 86, 124, 1)",
        borderRadius: "16px",
        color: "#fff",
        paddingTop: "70px",
        marginLeft: "30px",
        boxShadow: "4px 1px 10px #222"

    },
    "#form h3": {
        marginTop: "-10px",
        textAlign: "center",
        fontFamily: "arial"
    },

    "#form label": {
        fontFamily: "arial",
        fontSize: "15px",
    },

    "#form input": {
        marginTop: "6px",
        marginBottom: "15px",
        height: "15px",
        fontFamily: "monospace",
        width: "250px",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        borderBottom: "1px solid #fff",
        color: "#fff",
        transition: "0.2s",
        backgroundColor: "rgba(47, 72, 88, 1)",
        border: "1px solid transparent",
        borderRadius: "5px",
        height: "30px" ,
        borderBottom: "1px solid transparent",
        paddingLeft: "10px"
    },
    "#form input:hover ": {
        backgroundColor: "rgba(47, 72, 88, 1)",
        border: "1px solid transparent",
        borderRadius: "5px",
        height: "30px" ,
        borderBottom: "1px solid transparent",

    },

    "#form button": {
        fontFamily: "monospace",
        height: "35px",
        backgroundColor: "#fff",
        border: "1px solid transparent",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.2s",
        marginBottom: "15px",
        width: "260px",
        backgroundColor: "rgba(52, 151, 62, 1)",
        color: "#fff"
    },
    "#form button:hover": {

        border: "1px solid rgba(52, 151, 62, 30)",
        borderRadius: "10px",
        height: "38px",
        fontWeight: "bolder"
        
        
    },    
    "#form a": {
        marginLeft: "58px",
        fontSize: "13px",
        color: "#fff",
        textDecoration: "none"
        
    },
    "#form a:hover": {
        textDecorationLine: "underline",
        color: "Aqua"
    }

})