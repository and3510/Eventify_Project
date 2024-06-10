import { styled } from "@stitches/react"


export const StyledHeader = styled("header",{
    "#header": {
        // backgroundColor: "#c9d7ed",
        backgroundColor: "rgba(70, 86, 124, 1)",
        width: "132%",
        height: "100%",
        display: "inline-flex",
        justifyContent: "space-between",
        fontFamily: "arial",
        padding: "20px",
        borderTopRightRadius: "7px",
        borderTopLeftRadius: "7px",
        borderRadius: "none",
    },
    "#header a": {
        textDecoration: "none",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "25px",
        marginTop: "15px",
        marginLeft: "5px"
    },
    "#paginas": {
        display: "flex",
        flexWrap: "wrap",
        marginRight: "20px",
        marginTop: "3px"
    },

    "#paginas a": {
        borderBottom: "1px solid #fff",
        paddingRight: "15px",
        textDecoration: "none",
        fontSize: "16px",
        height: "20px",
        marginRight: "25px",
        padding: "10px",
        color: "#fff",
        transition: "0.1s",
        marginTop: "5px",
        backgroundColor: "transparant"
    },
    "#paginas a:hover ": {
        color: "#222",
        marginRight: "20px",
        backgroundColor: "#e9dced",
        backgroundColor: "#fff",
        borderRadius: "15px",
        border: "none"

    },
    "#paginas img": {
        width: "50px",
        backgroundColor: "#fff",
        borderRadius: "50px",
        border: "5px solid rgba(70, 86, 124, 1)",
        marginTop: "-5px"
    }
})