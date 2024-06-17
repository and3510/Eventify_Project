import {styled} from "@stitches/react"


export const StyledLogin = styled("Login", {
    "#pagina": {
        width: "100%",
        height: "450px",
        display: "flex",
        fontFamily: "monospace",
        fontSize: "20px",
        padding: "15px",
        justifyContent: "center",
        marginTop: "50px",
    },
    "#welcomesite": {
        backgroundColor: "rgba(47, 72, 88, 1)",
        alignContent: "center",
        color: "white",
        padding: "70px",
        borderTopLeftRadius: "16px",
        borderBottomLeftRadius: "16px",
        fontFamily: "arial",
        fontSize: "30px",
        boxShadow: "-3px 0px 10px #222",
    },
    "#form": {
        padding: "40px",
        backgroundColor: "rgba(70, 86, 124, 1)",
        borderBottomRightRadius: "16px",
        borderTopRightRadius: "16px",
        color: "#fff",
        paddingTop: "100px",
        boxShadow: "4px 1px 10px #222"

    },
    "#form h3": {
        marginTop: "-1px",
        textAlign: "center",
        fontFamily: "monospace",
        marginBottom: "50px",
        fontSize: "30px",
    },

    "#form label": {
        fontFamily: "arial",
        fontSize: "18px",
    },

    "#form input": {
        marginBottom: "15px",
        height: "15px",
        fontFamily: "monospace",
        width: "250px",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        borderBottom: "1px solid #fff",
        color: "#fff",
        transition: "0.2s",
        marginTop: "10px"
    },
    "#form input:hover ": {
        backgroundColor: "rgba(47, 72, 88, 1)",
        border: "1px solid transparent",
        borderRadius: "5px",
        height: "30px" ,
        borderBottom: "1px solid transparent",
        marginTop: "10px"

    },
    "#form button": {
        fontFamily: "monospace",
        height: "35px",
        backgroundColor: "#fff",
        border: "1px solid transparent",
        borderRadius: "8px",
        marginBottom: "10px",
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
        marginLeft: "0px",
        fontSize: "13px",
        color: "#fff",
        textDecoration: "none"
        
    },
    "#form a:hover": {
        textDecorationLine: "underline",
        color: "Aqua"
    }
      


})