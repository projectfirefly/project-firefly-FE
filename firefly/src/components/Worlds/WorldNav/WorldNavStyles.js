import { makeStyles } from "@material-ui/core/styles";

const WorldNavStyles = makeStyles({
  navContainer: {
    display: "flex",
    width: "100%",
    // border: "white 6px solid",
    justifyContent: "space-between",
    marginTop: "50px"
  },

  iconButton: {
    display: "flex",
    width: "44px",
    height: "44px",
    fontSize: "20px",
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    color: " #4aa810",
    fontWeight: "bold",
    fontSize: "18px",
    border: " 2px solid #abb0ba",
    borderRadius: " 10px",
    backgroundColor: " #ffffff",
    boxShadow: "0px 3px #8f96a3",
    marginLeft: "50px"
  },

  addButton: {
    display: "flex",
    width: "113px",
    height: "85px",
    fontSize: "36px",
    lineHeight: "37px",
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    color: " #4aa810",
    fontWeight: "bold",
    fontSize: "18px",
    border: " 2px solid #abb0ba",
    borderRadius: " 10px",
    backgroundColor: " #ffffff",
    boxShadow: "0px 3px #8f96a3",
    marginRight: "50px"
  },
  link: { textDecoration: "none", color: " #4aa810" }
});

export default WorldNavStyles;
