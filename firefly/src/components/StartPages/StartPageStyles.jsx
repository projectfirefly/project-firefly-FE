import { makeStyles } from "@material-ui/core";

const startPageStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // width: "100%",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3%"
  },
  fireflyImage: {
    height: "auto",
    maxWidth: "100%"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "40%",
    height: "160px",
    margin: "0 auto",
    marginTop: "7%"
  },
  getStarted: {
    backgroundColor: "#4aa810",
    color: "#e2f5d6",
    padding: "0.8rem",
    textTransform: "uppercase",
    fontSize: "1.3rem",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0px 3px #3e8c0d",
    cursor: "pointer",
    opacity: "0.92",
    transition: "opacity .25s ease-in-out",
    letterSpacing: "1px",
    width: "100%",

    "&:active": {
      opacity: "1",
      boxShadow: "none",
      margin: "3px 0px -3px 0px"
    },
    "&:focus": {
      outline: "none"
    }
  },
  topBar: {
    position: "absolute",
    left: "5%",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 1%",
    marginTop: "2%",
    width: "90%"
  },
  topBarItem: {
    display: "flex",
    color: "#5B4EFF",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    textDecoration: "none",
  },
  topBarText: {
    marginLeft: "5%"
  }
}))

export default startPageStyles;