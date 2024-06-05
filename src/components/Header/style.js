import { styled } from "@stitches/react"


export const StyledHeader = styled("header",{
    "#header": {
        // backgroundColor: "#c9d7ed",
        backgroundColor: "#005f91",
        width: "97%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
        padding: "20px",
        // boxShadow: "1px 1px 4px #c9d7ed",
        borderTopRightRadius: "7px",
        borderTopLeftRadius: "7px",
        borderRadius: "none",
        marginRight: "20px",
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
        borderBottom: "1px solid #fff",
        paddingRight: "15px",
        textDecoration: "none",
        fontSize: "16px",
        height: "20px",
        marginRight: "25px",
        borderRadius: "5px",
        padding: "10px",
        color: "#fff",
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