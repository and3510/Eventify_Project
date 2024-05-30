import { styled } from "@stitches/react"


export const StyledFooter = styled("footer",{
    "#footer": {
        padding: "10px",
        marginTop: "12px",
        width: "98.6%",
        height: "135px",
        backgroundColor: "#9fa83c",
        boxShadow: "1px 1px 4px #9fa83c",
        borderRadius: "7px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    "#footer nav": {
        marginLeft: "20px",
        border: "1px solid transparant",
        padding: "10px",
        width: "30%",
        backgroundColor: "#e9dced",
        borderRadius: "10px",
    },

    "#footer h2": {
        fontFamily: "monospace",
        marginLeft: "20px"
    },

    "#footer li": {
        fontFamily: "monospace",
        marginTop: "4px",
        fontSize: "15px"
    },
    "#footer nav p":  {
        fontFamily: "monospace",
        marginLeft: "20px",
        marginTop: "-5px",
        fontSize: "14px"
    }
})