import { makeStyles } from "@material-ui/core/styles";

const stepOneStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  sizingContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%"
  },
  stepTwoContainer: {
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: " 0px 20px 30px -20px rgba(0, 0, 0, 0.3)"
  },
  stepTwoButton: {
    color: "#4BA810",
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer"
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
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: " 0px 20px 30px -20px rgba(0, 0, 0, 0.3)"
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
    width: "45%"
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
    flexDirection: "column"
  },
  bigInput: {
    ...theme.input,
    width: "95.5%",
    margin: "1rem 0",
    padding: "1rem 1rem"
  },
  hidden: {
    visibility: "hidden"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "3rem"
  },
  buttonContainer2: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "3rem",
    marginBottom: "4rem"
  },
  buttonSpace: {
    margin: "0 5%"
  },
  nextButtonDisabled: {
    ...theme.disabledButton,
    padding: ".7rem 5rem"
  },
  nextButton: {
    ...theme.primaryButton,
    padding: ".7rem 5rem"
  },
  backButton: {
    ...theme.secondaryButton,
    padding: ".7rem 5rem"
  },
  addChild: {
    width: "100%",
    textAlign: "center",
    padding: "1.5rem 0"
  },
  childrenContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    overflowY: "scroll",
    zIndex: "10",
    marginBottom: "3rem",

    "&::-webkit-scrollbar": {
      width: "1%"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#b6e699",
      borderRadius: "10px"
    }
  },
  tutorialSize: {
    display: "flex",
    flexDirection: "column",
    width: "70%"
  },
  stepThreeContainer: {
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: " 0px 20px 30px -20px rgba(0, 0, 0, 0.3)",
    width: "85%"
  },
  boxes: {
    display: "flex",
    width: "85%",
    justifyContent: "space-between",
    marginBottom: "1rem"
  },
  box: {
    // ...theme.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "28%",
    padding: "2%",
    height: "45vh",
    "&.middle": {
      margin: "0 1%"
    }
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain"
  },
  tutorialH: {
    color: "black",
    letterSpacing: "0",
    marginBottom: "20%"
  },
  tutorialSteps: {
    ...theme.typography.h6,
    fontWeight: "600",
    listStyle: "disc"
  }
}));

export default stepOneStyles;
