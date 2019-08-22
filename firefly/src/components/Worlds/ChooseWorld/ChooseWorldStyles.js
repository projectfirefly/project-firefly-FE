import { makeStyles } from "@material-ui/core/styles";

const chooseWorldStyles = makeStyles(theme => ({
  rootContainer: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif",
    marginBottom: "50px"
  },
  title: {
    fontSize: "34px",
    fontWeight: "900",
    letterSpacing: "7px",
    lineHeight: "46px",
    color: "#5b4eff",
    marginBottom: "30px"
  },
  worldContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "65%",
    justifyContent: "space-between",
    alignItems: "center"
    // padding: "0 10%"
  },
  ///////// World Card Styling //////
  worldCard: {
    width: "370px",
    height: "226px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    marginBottom: "50px",
    border: " 2px solid #abb0ba",
    backgroundColor: " #ffff",
    boxShadow: "0px 3px #8f96a3",
    h4: {
      fontSize: "22px",
      color: "#152F04",
      fontWeight: "bold"
    }
  },
  worldCardImg: {
    width: "50%"
  },
  buttonContainer: {
    marginTop: "-20px",
    width: "100%"
    // display: "block"
  },
  backButton: {
    ...theme.secondaryButton,
    width: "25%"
  },
  links: {
    textDecoration: "none",
    color: "#152F04"
  }
}));

export default chooseWorldStyles;
