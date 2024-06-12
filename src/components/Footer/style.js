import { styled } from "@stitches/react"


export const StyledFooter = styled("footer",{
    "#footer": {
        padding: "10px",
        marginTop: "0px",
        width: "101.5%",
        height: "100%",
        backgroundColor: "#294747",
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
        backgroundColor: "transparent",
        borderRadius: "10px",
    },
    "#footer nav p":  {
        textAlign: "center",
        fontFamily: "monospace",
        marginLeft: "20px",
        marginTop: "-5px",
        fontSize: "14px",
        color: "#fff"
    }

})