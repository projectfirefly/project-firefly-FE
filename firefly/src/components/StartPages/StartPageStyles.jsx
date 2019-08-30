import { makeStyles } from "@material-ui/core";
import background from "../../images/backgroundTiling.png";

const startPageStyles = makeStyles(theme => ({
  root: {},
  logo: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3%"
  },
  logoBox: {
    width: "100%",
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
    },
    ["@media (max-width: 430px)"]: {
      paddingTop: "150px",
      width: "80%"
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
    padding: ".6rem 12%",
    ["@media (max-width: 400px)"]: {
      width: "60%",
      marginTop: "40px"
    },
    marginTop: "6%",
    padding: ".6rem 12%",
    "&:active": {
      margin: "6.1% 0% 0.1%",
      boxShadow: "none"
    }
  },
  secondaryButton: {
    ...theme.secondaryButton,
    padding: ".6rem 4.5%",
    marginTop: "3rem"
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
