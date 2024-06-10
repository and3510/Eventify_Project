import {styled} from "@stitches/react"

export const StyledHome = styled("Home", {
    "#menu":{
        width: "100.8%",
        height: "410px",
        display: "flex",
        justifyContent: "space-evenly",
        fontFamily: "monospace",
        fontSize: "20px",
        marginTop: "0px",
        padding: "15px",
        backgroundColor: "#2F4858",
        borderBottomLeftRadius: "7px",
        borderBottomRightRadius: "7px",
        paddingTop: "80px"
    },
    "#eventos_principais":{
        textAlign: "center",
        border: "1px solid transparant",
        borderRadius: "10px",
        padding: "25px",
        fontFamily: "monospace",
        paddingTop: "0px",
        backgroundColor: "#e9dced",
        marginLeft: "65px",
        height: "55%"

    },
    "#eventos_principais h3": {
        fontFamily: "monospace"
    },
    "#eventos_principais a": {
        borderBottom: "1px solid #222",
        borderRadius: "5px",
        width: "200px",
        paddingBottom: "6px",
        paddingTop: "6px",
        transition: "0.3s",
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
        marginBottom: "15px",
        color: "black"
    },
    "#eventos_principais a:hover": {
        paddingTop: "13px",
        paddingBottom: "13px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        border: "none"

    },
    "#calendar img": {
        border: "1px solid none ",
        width: "480px",
        height: "280px",
        borderRadius: "10px",
        transition: "0.3s",
        backgroundColor: "#e9dced",
        marginLeft: "20px"
    },
    "calendar nav": {
        flexWrap: "wrap"
    },
    "#calendar": {
        display: "flex"
    },
    "#calendar nav ul button": {
        width: "100%",
        marginBottom: "10px",
        height: "35px",
        border: "1px solid #e9dced",
        borderRadius: "10px",
        fontFamily: "monospace",
        fontSize: "15px",
        backgroundColor: "#e9dced",
        transition: "0.3s"
    },
    "#calendar nav button:hover": {
        fontSize: "15px",
        backgroundColor: "#fff",
    },

    "@media (max-width: 950px)": {
        "#eventos_principais": {
            marginRight: "78px",
        },
        "#eventos_principais a": {
            width: "350px",
        
        },

        "#calendar img": {
            marginTop: "20px",
            width: "300px",
            marginLeft: "50px"
        },

        "#calendar nav ul button": {
            marginLeft: "-10px",
            fontSize: "8px",
            width: "80px",
            marginRight: "60px",
            padding: "0px"
        },
        "#calendar nav button:hover": {
            fontSize: "10px",
            backgroundColor: "#fff",
            fontWeight: "bolder"

        },
        "#menu": {
            flexWrap: "wrap"
        }
    },

    




})