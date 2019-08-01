import { makeStyles } from "@material-ui/core/styles";

const createProfileClasses = makeStyles({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    width: "100%",
    fontFamily: "'Nunito', sans-serif"
  },
  sizingContainer: {
    width: "80%"
  },
  header: {
    fontSize: "2.6rem",
    letterSpacing: "7px",
    fontWeight: "900",
    color: "#5B4EFF",
    textTransform: "uppercase",
    marginBottom: "4%"
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  card: {
    backgroundColor: "#FFF",
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "50%",
    "&.left": {
      marginRight: "6%",
      position: "relative",
      width: "30%",
      padding: "7% 3%"
    },
    "&.right": {
      padding: "3%"
    }
  },
  accessory: {},
  h2: {
    fontSize: "28px",
    fontWeight: "600",
    margin: "3%",
    "&.nickname": {
      color: "#52ab1a"
    }
  },
  input: {
    fontSize: "22px",
    border: "none",
    background: "#e2f5d6",
    margin: "3%",
    padding: "2%",
    borderRadius: "5px",
    width: "90%"
  },
  slider: {
    margin: "0 4%"
  },
  buttonContainer: {
    display: "flex",
    marginTop: "3%",
    marginBottom: "3%",
    height: "5%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  a: { width: "25% " },

  button: {
    fontSize: "16px",
    fontFamily: "'Nunito', sans-serif",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "25%",
    height: "44px",
    padding: "8px 0",
    "text-decoration": "none",
    letterSpacing: "1px",

    "&.back": {
      width: "100%",
      background: "#fff",
      color: "#4aa810",
      "&:active": {
        boxShadow: "none",
        marginTop: "5px"
      }
    },
    "&.save": {
      width: "100%",
      background: "#4aa810",
      color: "#e2f5d6",
      border: "none",
      boxShadow: "0px 3px #3E8C0D",
      "&:active": {
        boxShadow: "none",
        marginTop: "3px"
      }
    }
  }
});

export default createProfileClasses;
