import {styled} from "@stitches/react"

export const StyledHome = styled("Home", {
    "body": {
       overflow: "hidden" 
    },
    
    "#menu":{
        width: "1280px",
        display: "flex",
        borderBottom: "1px solid #222",
        borderTop: "1px solid #222",
        height: "100%",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        borderRadius: "12px",
        marginTop: "10px",
        padding: "15px"
    },
    "#eventos_principais":{
        textAlign: "center",
        border: "1px solid #222",
        borderRadius: "10px",
        padding: "25px",
        fontFamily: "monospace",
        paddingTop: "10px"

    },
    "#eventos_principais h3": {
        fontFamily: "monospace"
    },
    "#eventos_principais p": {
        borderBottom: "1px solid #222",
        borderRadius: "10px",
        width: "200px",
        paddingBottom: "6px",
        borderTop: "1px solid #222",
        paddingTop: "6px"
    },
    "#mapa img": {
        border: "1px solid #222",
        width: "410px",
        height: "280px",
        borderRadius: "10px"
    }

})