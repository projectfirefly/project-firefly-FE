import { makeStyles } from "@material-ui/core/styles";

const chooseProfileStyles = makeStyles(theme => ({
  header: {
    ...theme.headerMargin,
    marginBottom: "2%",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 4.7%"
  },
  sizingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 10%",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    overflowY: "scroll",
    maxHeight: "70vh",
    // boxSizing: "border-box",
    // background: "#e3e5e8",
    // backgroundRepeat: "repeat",
    // border: "2px solid #abb0ba",
    // boxShadow: "1px 3px 2px #8f96a3z",
    // borderRadius: "1rem",
  },
  card: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "25%",
    margin: "1%",
    padding: "2% 1%",
  },
  backButtonContainer: {
    display: "flex",
    marginTop: "5%",
    width: "100%",
  },
  backButtonStyle: {
    ...theme.secondaryButton,
    textDecoration: "none",
    padding: "0.8rem",
    width: "20%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5%",
    paddingTop: "2%",
    maxWidth: "100%",
  },
  name: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
  flysize: {
    width: "80%",
    paddingBottom: "5%",
  }
}));

export default chooseProfileStyles