import {styled} from "@stitches/react"

export const StyledEventmanager = styled("Eventmanager", {
    ".pagina":{
        border: "1px solid purple",
        height: "100%",
        marginRight: "10%",
        marginLeft: "10%"
    },
    ".titulo":{
        border: "1px solid red",
        color: "white",
        textAlign: "center",
        fontWeight: "Bold",
        fontFamily: "Inter",
    },
    ".conteudo":{
        display: "flex"
    },
    ".Desempenho_Evento": {
        border: "1px solid blue",
        flex: "1"

    },
    ".Inscrições":{
        border: "1px solid green",flex: "1"
    }
})
