import { makeStyles } from "@material-ui/core";

const startPageStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%"
  },
  logoBox: {
    position: "relative",
    margin: "auto",
    marginTop: "50px"
  },

  animation: {
    // position: "absolute",
    // top: "0px",
    // right: "200px",
    // zIndex: "5"
    marginRight: "-200px"
  },

  staticImage: {
    positon: "absolute",
    top: "0",
    right: "0",
    zIndex: "-5",
    marginTop: "-100px"
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  startButton: {
    ...theme.primaryButton,
    padding: ".6rem 12%"
  },
  secondaryButton: {
    ...theme.secondaryButton,
    padding: ".6rem 4.5%",
    marginTop: "3rem"
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
    textDecoration: "none"
  },
  topBarText: {
    marginLeft: "5%"
  }
}));

export default startPageStyles;
