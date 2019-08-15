import { makeStyles } from "@material-ui/core/styles";

const stepOneStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  formsContainer: {
    ...theme.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "65%",
    padding: "4rem 3rem",
    marginTop: "1rem",
  },
  smallInputContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "space-around",
    margin: ".5rem 0"
  },
  smallInputSizer: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
  },
  smallInput: {
    ...theme.input,
    width: "90%",
    margin: "1rem .2rem",
    padding: "1rem 1rem"
  },
  bigInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    margin: ".5rem 0"
  },
  bigInputSizer: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
  },
  bigInput: {
    ...theme.input,
    width: "95.5%",
    margin: "1rem 0",
    padding: "1rem 1rem"
  },
  hidden: {
    visibility: "hidden",
  }
}));

export default stepOneStyles;
