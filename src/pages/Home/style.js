import {styled} from "@stitches/react"

export const StyledHome = styled("Home", {
    "#menu":{
        width: "97.8%",
        height: "100%",
        display: "flex",
        borderBottom: "1px solid #222",
        borderTop: "1px solid #222",
        height: "100%",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        marginTop: "10px",
        padding: "15px",
        backgroundColor: "#124e60",
        boxShadow: "1px 1px 4px #124e60",
        borderRadius: "7px",
        flexWrap: "wrap"
    },
    "#eventos_principais":{
        textAlign: "center",
        border: "1px solid transparant",
        borderRadius: "10px",
        padding: "25px",
        fontFamily: "monospace",
        paddingTop: "10px",
        backgroundColor: "#e9dced",
        marginLeft: "65px"

    },
    "#eventos_principais h3": {
        fontFamily: "monospace"
    },
    "#eventos_principais p": {
        borderBottom: "1px solid #222",
        borderRadius: "5px",
        width: "200px",
        paddingBottom: "6px",
        paddingTop: "6px",
        transition: "0.3s",
        cursor: "default"
    },
    "#eventos_principais p:hover": {
        paddingTop: "13px",
        paddingBottom: "13px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        border: "none"

    },
    "#calendar img": {
        border: "1px solid none ",
        width: "410px",
        height: "280px",
        borderRadius: "10px",
        transition: "0.3s",
        backgroundColor: "#e9dced"
    },
    "#calendar img:hover": {
        padding: "12px"
    },

    "#calendar": {
        display: "flex"
    },
    "#calendar nav button": {
        width: "60%",
        marginBottom: "10px",
        height: "35px",
        border: "1px solid #e9dced",
        borderRadius: "10px",
        fontFamily: "monospace",
        backgroundColor: "#e9dced",
        transition: "0.3s"
    },
    "#calendar nav button:hover": {
        fontSize: "15px",
        backgroundColor: "#fff",
    }




})