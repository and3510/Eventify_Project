import { styled } from "@stitches/react"


export const StyledHeader = styled("header",{
    "#header": {
        backgroundColor: "#c9d7ed",
        width: "97%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
        padding: "20px",
        boxShadow: "1px 1px 4px #c9d7ed",
        borderRadius: "7px"
    },
    "#header img": {
        marginLeft: "20px",
        width: "50px",
        transition: "0.25s"
    },
    "#header img:hover ": {
        width: "60px"

    },
    "#header a": {
        textDecoration: "none",
        color: "#222"
    },
    "#paginas": {
        display: "flex",
        flexWrap: "wrap",
        marginRight: "20px"
    },

    "#paginas a": {
        borderBottom: "1px solid #222",
        paddingRight: "15px",
        textDecoration: "none",
        fontSize: "16px",
        height: "20px",
        marginRight: "25px",
        borderRadius: "5px",
        padding: "10px",
        color: "#222",
        transition: "0.3s",
        marginTop: "5px",
        backgroundColor: "transparant"
    },
    "#paginas a:hover ": {
        padding: "12px",
        color: "#222",
        marginRight: "20px",
        backgroundColor: "#e9dced",
        backgroundColor: "#fff",
        borderRadius: "15px",
        border: "none"

    }
})