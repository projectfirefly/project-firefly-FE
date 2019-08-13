import { makeStyles } from "@material-ui/core";

const accountStyles = makeStyles(theme => ({
  paper: {
    padding: "20px 20px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: " 20px"
    // marginBottom: "32px",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  editButtons: {
    display: "flex",
    marginTop: "40px",
    justifyContent: "space-between"
  },
  button: {
    width: "40%",
    marginTop: "40px"
  },
  root: {
    flexGrow: "1",
    marginTop: "3%",
    fontFamily: "'nunito', sans-serif"
  },
  container: {
    display: "flex",
    padding: " 0 3%"
  },
  left: {
    width: "100%"
  },
  leftContainerOne: {
    marginRight: "10%",
    marginBottom: "54px"
  },
  leftContainerTwo: {
    marginRight: "10%",
    marginBottom: "54px"
  },
  leftContainer: {
    height: "131px",
    marginRight: "10%"
  },
  header: {
    textAlign: "center",
    color: "#5b4eff",
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: "5%"
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: "21px",
    paddingBottom: "21px"
  },
  sectionHeaderRight: {
    fontWeight: "bold",
    fontSize: "21px",
    paddingBottom: "18px"
  },
  infoContainer: {
    display: "flex",
    marginBottom: "20px"
  },
  infoLabel: {
    fontSize: "16px",
    padding: "0"
  },
  userInfo: {
    padding: "0"
  },
  rightCards: {
    width: "60%"
  },
  fireflyContainer: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "scroll",
    height: "366px",
    width: "100%"
  },
  profileCardContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    width: "100%"
  },
  fireflyIcon: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: "45%"
  },

  style1: {
    borderTop: " 1px solid #b6e699",
    width: "100%"
  },
  edit: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  iconButton: {
    marginLeft: "20%",
    display: "flex",
    width: "40px",
    height: "40px",
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    color: " #4aa810",
    fontWeight: "bold",
    fontSize: "18px",
    border: " 2px solid #abb0ba",
    borderRadius: " 10px",
    backgroundColor: " #ffffff",
    boxShadow: "0px 3px #8f96a3"
  },
  button: {
    display: "block",
    marginTop: "40px"
  },
  researchSection: {
    display: "flex",
    p: {
      paddingTop: " 5px",
      fontSize: "16px"
    }
  },
  checkboxLabel: {
    position: "relative",
    margin: "auto",
    cursor: "pointer",
    fontSize: "18px",
    lineHeight: "24px",
    height: "18px",
    width: "18px",
    clear: "both"
  },
  input: {
    position: "absolute",
    opacity: "0",
    cursor: "pointer"
  }
}));

export default accountStyles;
