import { makeStyles } from "@material-ui/core/styles";

const stepOneStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  sizingContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  formsContainer: {
    ...theme.paper,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "2rem 3rem",
    marginTop: "1rem",
  },
  smallInputContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "space-around",
    margin: ".5rem 0",
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
    padding: "1rem 1rem",
  },
  bigInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    margin: ".5rem 0",
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
    padding: "1rem 1rem",
  },
  hidden: {
    visibility: "hidden",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "3rem",
  },
  nextButtonDisabled: {
    ...theme.disabledButton,
    padding: ".7rem 5rem",
  },
  nextButton: {
    ...theme.primaryButton,
    padding: ".7rem 5rem",
  },
  backButton: {
    ...theme.secondaryButton,
    padding: ".7rem 5rem",
  },
  addChild: {
    ...theme.secondaryButton,
    padding: "1.5rem 0",
  },
  childrenContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    overflowY: "scroll",
    zIndex: "10",
    marginBottom: "3rem",
    "&::-webkit-scrollbar": {
      width: "1%",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#b6e699",
      borderRadius: "10px",
    },
  },
}));

export default stepOneStyles;
