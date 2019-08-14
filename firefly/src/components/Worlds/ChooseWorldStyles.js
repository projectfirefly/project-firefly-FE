import { makeStyles } from "@material-ui/core/styles";

const chooseWorldStyles = makeStyles({
  rootContainer: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif"
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
    // border: "solid pink 1px",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  ///////// World Card Styling //////
  worldCard: {
    width: "370px",
    height: "226px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",
    marginBottom: "50px",
    h4: {
      fontSize: "20px",
      color: "#152F04",
      fontWeight: "bold"
    }
  },
  worldCardImg: {
    width: "50%"
  }
});

export default chooseWorldStyles;
