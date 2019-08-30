import { makeStyles } from "@material-ui/core";

const myFireflyStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    padding: "0 4.7%",
    backgroundColor: "#f6f5ff",
    height: "100vh"
  },
  header: {
    ...theme.headerMargin,
    color: "#5B4EFF",
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    textTransform: "uppercase",
    fontFamily: "'Nunito', sans-serif"
  },
  mainBody: {
    display: "flex",
    width: "100%",
    height: "70vh"
  },
  leftParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%"
  },
  leftContainer: {
    ...theme.paper,
    width: "60%",
    height: "80%"
  },
  fireflyContainer: {
    width: "264px",
    margin: "0 auto",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  firefly: {
    width: "62%"
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-between",
    width: "47%",
    height: "80%"
  },
  rightCards: {
    ...theme.secondaryButton,
    ...theme.paper,
    width: "100%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&.bottom": {
      marginTop: "10%"
    }
  },
  rightCardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rightCardsText: {
    color: "#5B4EFF",
    fontSize: "24px",
    fontWeight: "700"
  },
  rightCardsImg: {
    width: "15%"
  },
  buttonContainer: {
    width: "60%",
    marginTop: "10%"
  },
  chooseFirefly: {
    ...theme.secondaryButton,
    width: "100%",
    padding: ".7rem 0"
  },
  pushRight: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  edit: {
    display: "flex",
    width: "22px",
    height: "21px",
    color: "#4AA810",
    marginLeft: "3px",
    alignItems: "center",
    justifyContent: "center"
  },
  editContainer: {
    ...theme.smallIconButton,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "44px",
    height: "44px",
    margin: "25px 25px 0 0",
    "&:active": {
      boxShadow: "none",
      marginTop: "28px",
      marginBottom: "-3px"
    }
  },
  username: {
    textAlign: "center",
    color: "#152F04",
    fontWeight: "bold",
    fontSize: "21px",
    letterSpacing: "-0.28px",
    lineHeight: "28px"
  }
}));

export default myFireflyStyles;
