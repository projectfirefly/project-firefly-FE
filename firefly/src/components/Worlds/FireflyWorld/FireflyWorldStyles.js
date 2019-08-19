import { makeStyles } from "@material-ui/core/styles";
import background from "./FireflyWorldBackground.svg";

const chooseWorldStyles = makeStyles({
  body: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "0px 0px",
    minWidth: "100vw",
    height: "102vh",
    backgroundSize: "cover",
    backgroundPosition: " 0px 0px",
    backgroundRepeat: "no-repeat"
  },
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif",
    marginBottom: "50px"
  },
  fireflyContainer: {
    // border: "dashed yellow 2px",
    marginTop: "10%",
    // padding: "20px 0",
    width: "100%",
    height: "400px"
  },
  tempFirefly: {
    paddingRight: "700px"
  },
  tempFirefly2: {
    paddingLeft: "500px"
  }
});

export default chooseWorldStyles;
