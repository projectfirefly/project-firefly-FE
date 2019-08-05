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
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    color: "#5B4EFF",
    textTransform: "uppercase",
    marginBottom: "50px"
  },
  cardContainer: {
    height: "445px",
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#FFFFFF",
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "321px",
    "&.left": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      margin: "0 76px 0 0"
    },
    "&.right": {
      padding: "3%"
    }
  },
  firefly: {
    display: "flex",
    width: "264px"
  },
  accessory: {
    display: "flex",
    flexDirection: "column",
    height: "86px",
    marginBottom: "60px"
  },
  lightColor: {
    marginTop: "20%"
  },
  h2: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "3%",
    marginBottom: "5px",
    color: "#52ab1a"
  },
  input: {
    fontSize: "18px",
    border: "none",
    background: "#e2f5d6",
    margin: "3%",
    marginBottom: "57px",
    padding: "2%",
    borderRadius: "5px",
    width: "90%",
    "&:focus": {
      outline: "none"
    }
  },
  sliderContainer: {
    height: "77px"
  },
  slider: {
    margin: "0 4%",
    height: "22px"
  },
  buttonContainer: {
    display: "flex",
    width: "76%",
    margin: "50px",
    justifyContent: "space-between",
    alignItems: "center"
  },

  a: {
    width: "200px",
    "text-decoration": "none"
  },

  button: {
    display: "flex",
    justifyContent: "center",
    fontSize: "16px",
    fontFamily: "'Nunito', sans-serif",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "200px",
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
        marginTop: "3px",
        marginBottom: "-3px"
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
        marginTop: "3px",
        marginBottom: "-3px"
      }
    },
    "&:hover": {
      cursor: "pointer"
    }
  }
});

export default createProfileClasses;
