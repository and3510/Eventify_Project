import { styled } from "@stitches/react"


export const StyledHeader = styled("header",{
    "#header": {
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
        padding: "20px"
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
        border: "1px solid #222",
        paddingRight: "15px",
        textDecoration: "none",
        fontSize: "16px",
        height: "20px",
        marginRight: "10px",
        borderRadius: "15px",
        padding: "10px",
        color: "#222"
    }
})