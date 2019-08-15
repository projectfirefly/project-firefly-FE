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
    ...theme.headerMargin,
    height: "auto",
    maxWidth: "100%"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  startButton: {
    ...theme.primaryButton,
    padding: ".6rem 12%"
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
  topBarButton: {
    ...theme.secondaryButton,
    display: "flex",
    color: "#4aa810",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    width: "3.4rem",
    height: "3.4rem",
    textDecoration: "none",
  },
  topBarText: {
    marginLeft: "5%"
  }
}))

export default startPageStyles;