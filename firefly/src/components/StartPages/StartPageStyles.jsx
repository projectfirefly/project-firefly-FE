import { makeStyles } from "@material-ui/core";

const startPageStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // width: "100%"
  },
  logoBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: "-1",
    margin: "0px auto",
    marginTop: "50px",
    "& div[role=button]": {
      paddingLeft: "230px",
      paddingBottom: "5px"
    }
  },

  staticImage: {
    // positon: "absolute",
    // top: "0",
    // right: "0",
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
    ...theme.smallIconButton,

    display: "flex",
    color: "#4aa810",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    width: "5rem",
    height: "5rem",
    textDecoration: "none"
  },
  topBarText: {
    marginLeft: "5%"
  }
}));

export default startPageStyles;
