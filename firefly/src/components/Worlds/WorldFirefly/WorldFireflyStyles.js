import { makeStyles } from "@material-ui/core/styles";

const WorldFireflyStyles = makeStyles({
  container: {
    // border: " solid pink 2px",
    position: "absolute",
    marginLeft: "200px",
    width: "170px"
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    height: "35px",
    filter: "drop-shadow(1px 1px 1px #494d4f)"
  },
  icon: {},
  hidden: {
    height: "35px",
    visibility: "hidden"
  },
  move: {
    fontSize: "26px",
    color: "#f9dc28",
    marginTop: "19px"
  },
  pen: {
    fontSize: "26px",
    color: "#f9dc28",
    marginTop: "-10px"
  },
  trash: {
    fontSize: "26px",
    color: "#f9dc28",
    marginTop: "19px"
  }
});

export default WorldFireflyStyles;
