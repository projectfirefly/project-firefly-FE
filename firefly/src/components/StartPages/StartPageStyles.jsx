import { makeStyles } from "@material-ui/core";
import background from "../../images/backgroundTiling.png";

const startPageStyles = makeStyles(theme => ({
  logoBox: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: "-1",
    margin: "0px auto",
    paddingTop: "50px",
    zIndex: "1",
    "& div[role=button]": {
      paddingLeft: "230px",
      paddingBottom: "5px"
    }
  },

  staticImage: {
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
    marginTop: "6%",
    width: "40%",
    padding: ".6rem 0",
    "&:active": {
      margin: "6.1% 0% -0.1%",
      boxShadow: "none"
    }
  },
  secondaryButton: {
    ...theme.secondaryButton,
    padding: ".6rem 0",
    width: "40%",
    marginTop: "3rem",
    "&:active": {
      marginTop: "3rem"
    }
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px auto",
    paddingTop: "2%",
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
