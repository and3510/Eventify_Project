import { styled } from "@stitches/react"


export const StyledFooter = styled("footer",{
    "#footer": {
        padding: "10px",
        marginTop: "0px",
        width: "98.57%",
        height: "100%",
        backgroundColor: "#9fa83c",
        display: "flex",
        justifyContent: "space-evenly",
        borderBottomRightRadius: "7px",
        borderBottomLeftRadius: "7px"
    },
    "@media (max-width: 600px)": {
        "#footer": {
            display: "flex",
            height: "100%",
            flexWrap: "wrap"
        },
        "#footer nav": {
            width: "30%",
            marginRight: "25px"
        }
    },

    "#footer nav": {
        marginTop: "10px",
        marginLeft: "20px",
        border: "1px solid transparant",
        padding: "10px",
        width: "70%",
        backgroundColor: "#e9dced",
        borderRadius: "10px",
        height: "130px"
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