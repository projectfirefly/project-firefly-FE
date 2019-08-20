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
    width: "85%",
    margin: "0 10%",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    overflowY: "auto",
    width: "100%",
    maxHeight: "70vh",
    "&::-webkit-scrollbar": {
      width: "1%",
    },
    // "&::-webkit-scrollbar-track": {
    //   boxShadow: "inset 0 0 5px grey",
    //   borderRadius: "10px",
    // },
    "&::-webkit-scrollbar-thumb": {
      background: "#b6e699",
      borderRadius: "10px",
    },
    //This after stuff is for flex spacing when there's only two in the line
    "&::after": {
      content: "''",
      width: "25%",
      margin: "1%",
      marginTop: "-10%",
      padding: "2% 1%",
      visibility: "hidden",
      zIndex: "-1000",
    },
    // boxSizing: "border-box",
    // background: "#e3e5e8",
    // backgroundRepeat: "repeat",
    // border: "2px solid #abb0ba",
    // boxShadow: "1px 3px 2px #8f96a3z",
    // borderRadius: "1rem",
  },
  card: {
    ...theme.clickable,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "25%",
    margin: "1% 1%",
    padding: "2% 1%",
  },
  backButtonContainer: {
    display: "flex",
    marginTop: "5%",
    width: "100%",
    marginLeft: "2%",
  },
  backButtonStyle: {
    ...theme.secondaryButton,
    padding: "0.8rem",
    width: "20%",
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