import { makeStyles } from "@material-ui/core/styles";

const createProfileClasses = makeStyles({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    fontFamily: "'Nunito', sans-serif"
  },
  header: {
    fontSize: "2.6rem",
    letterSpacing: "7px",
    fontWeight: "900",
    color: "#5B4EFF",
    textTransform: "uppercase"
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#FFF",
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "40%",
    margin: "3%",
    "&.left": {
      position: "relative",
      width: "30%",
      padding: "7% 3%"
    },
    "&.right": {
      padding: "3%"
    }
  },

  accessory: {
    zIndex: -100,
    position: "absolute",
    border: "1px solid red"
  },
  h2: {
    fontWeight: "600",
    margin: "3%",
    "&.nickname": {
      color: "#52ab1a"
    }
  },
  input: {
    border: "none",
    background: "#e2f5d6",
    margin: "1%",
    padding: "2%",
    borderRadius: "5px",
    width: "90%"
  },
  slider: {
    margin: "0 4%"
  }
});

export default createProfileClasses;
