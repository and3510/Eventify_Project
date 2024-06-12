// src/pages/Home/style.js
import { styled } from "@stitches/react";

export const StyledHome = styled("div", {
  "#menu": {
    width: "100.8%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "monospace",
    fontSize: "20px",
    padding: "15px",
    backgroundColor: "#46567C",
  },
  "#menu h1": {
    color: "#fff",

  },
  "#eventos_principais": {
    display: "block",
    marginTop: "50px"
  },
  "#eventos_principais nav": {
    textAlign: "center",
    border: "1px solid transparent",
    borderRadius: "10px",
    padding: "25px",
    fontFamily: "monospace",
    paddingTop: "10px",
    backgroundColor: "#e9dced",
    marginLeft: "65px",
    height: "70%",
    width: "65%"
  },
  "#eventos_principais h1": {
    fontFamily: "monospace",
    textAlign: "center",
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
    color: "black",
  },
  "#eventos_principais a:hover": {
    paddingTop: "13px",
    paddingBottom: "13px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    border: "none",
  },
  "#calendar img": {
    border: "1px solid none ",
    width: "410px",
    height: "280px",
    borderRadius: "10px",
    transition: "0.3s",
    backgroundColor: "#e9dced",
    marginLeft: "20px",
  },
  "#calendar img:hover": {
    padding: "5px",
  },
  "#calendar nav": {
    display: "flex",
    marginLeft: "-45px"
  },
  "#calendar": {
    
    marginTop: "50px",
    display: "block",
    alignItems: "center",
  },
  "#calendar h1": {
    textAlign: "center"
  },
  "#calendar nav ul button": {
    width: "150px",
    marginBottom: "10px",
    height: "35px",
    border: "1px solid #e9dced",
    borderRadius: "10px",
    fontFamily: "monospace",
    fontSize: "15px",
    backgroundColor: "#e9dced",
    transition: "0.3s",
    marginRight: "10px"
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
      marginLeft: "50px",
    },
    "#calendar nav ul button": {
      marginLeft: "-10px",
      fontSize: "8px",
      width: "80px",
      marginRight: "60px",
      padding: "0px",
    },
    "#calendar nav button:hover": {
      fontSize: "10px",
      backgroundColor: "#fff",
      fontWeight: "bolder",
    },
    "#menu": {
      flexWrap: "wrap",
    },
  },
});
