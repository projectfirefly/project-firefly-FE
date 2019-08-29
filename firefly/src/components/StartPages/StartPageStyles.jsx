import { makeStyles } from "@material-ui/core";
import background from "../../images/backgroundTiling.png";

const startPageStyles = makeStyles(theme => ({
  root: {
    fontFamily: "'Nunito', sans-serif",
    backgroundImage: "url('./../images/backgroundTiling.png')",
    margin: "0",
    "@keyframesAnimatedBackground": {
      from: "backgroundPosition: '0 0'",
      to: "backgroundPosition: '-512px 0'"
    },
    backgroundPosition: "0px 0px",
    backgroundRepeat: "repeat",
    //animations
    animation: "animatedBackground 6s linear infinite"
  },
  logoBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
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
