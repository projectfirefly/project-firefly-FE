import { makeStyles } from "@material-ui/core/styles";

const chooseProfileStyles = makeStyles(theme => ({
  header: {
    ...theme.headerMargin,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 4.7%"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0 10%"
  },
  backButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "2% 10% 0",
    padding: "0 4%"
  },

  backButtonStyle: {
    textDecoration: "none",
    backgroundColor: "#FFF",
    border: "2px solid #ABB0BA",
    color: "#4aa810",
    padding: "0.8rem",
    textTransform: "uppercase",
    fontSize: "1.3rem",
    borderRadius: "10px",
    fontWeight: "700",
    boxShadow: "0px 3px #8f96a3",
    cursor: "pointer",
    opacity: "0.92",
    transition: "opacity .25s ease-in-out",
    letterSpacing: "1px",
    width: "21.1%",
    display: "flex",
    justifyContent: "center",

    "&:active": {
      opacity: "1",
      boxShadow: "none",
      margin: "3px 0px -3px 0px"
    },

    "&:focus": {
      outline: "none"
    }
  },
  single: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "6%"
  },
  card: {
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "68%"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "0",
    paddingTop: "10px",
  },
  name: {
    fontSize: "1.5rem",
    color: "#243d14",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  flysize: {
    // width: "100%",
    // height: "100%"
  }
}));

export default chooseProfileStyles