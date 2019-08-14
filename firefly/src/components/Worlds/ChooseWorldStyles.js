import { makeStyles } from "@material-ui/core/styles";

const chooseWorldStyles = makeStyles({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "10%",
    width: "100%",
    fontFamily: "'Nunito', sans-serif"
  },
  title: {
    fontSize: "34pt",
    fontWeight: "900",
    letterSpacing: "7pt",
    lineHeight: "46pt",
    color: "#5b4eff"
  }
});

export default chooseWorldStyles;
