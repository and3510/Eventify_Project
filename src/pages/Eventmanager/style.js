import { FormatAlignJustify, Height, MarginTwoTone } from "@mui/icons-material"
import { yellow } from "@mui/material/colors"
import { border, borderColor, flexbox, grid, padding, textAlign } from "@mui/system"
import { styled } from "@stitches/react"

export const StyledEventmanager = styled("Eventmanager", {
    ".pagina": {
        border: "1px solid purple",
        height: "540px",
        marginRight: "2%",
        marginLeft: "5%",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "rgba(70, 86, 124, 1)",

    },
    ".titulo": {
        h1: {
            color: "white",
            textAlign: "center",
            fontWeight: "Bold",
            fontFamily: "Inter",
            border: "1px solid white",
            marginLeft: "38%"
        },
        display:"flex",
        border: "1px solid red",
    },
    ".conteudo": {
        display: "flex"
    },
    ".desempenho_evento": {
        h1: { textAlign: "center", color: "white" },
        border: "1px solid blue",
        flex: "1",
        height: "400px"


    },
    ".inscrições": {
        h1: { textAlign: "center", color: "white" },
        border: "1px solid green",
        flex: "1",
        backgroundColor: "rgba(53, 66, 96, 1)",
        borderRadius: "20px",
        overflowY: "scroll"



    },
    ".inscrito": {
        h4: { marginLeft: "30px", color: "white" },
        border: "1px solid yellow",
        margin: "30px",
        display: "flex",
        ".text": {
            border: "1px solid blue",
            flex: "1"
        },
        ".botões": {
            flex: "1",
            border: "1px solid white",
            textAlign: "center",
            ".aceita": { marginRight: "4px", backgroundColor: "rgba(52, 151, 62, 1)", borderColor: "rgba(52, 151, 62, 1)", marginTop: "20px", height: "42px", width: "124px", color: "white", fontWeight: "Bold", borderRadius: "6.45px" },
            ".recusar": { backgroundColor: "rgba(236, 47, 47, 1)", borderColor: "rgba(236, 47, 47, 1)", height: "42px", width: "124px", marginTop: "20px", color: "white", fontWeight: "Bold", borderRadius: "6.45px" }



        }

    }
})
