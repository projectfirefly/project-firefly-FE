import { makeStyles } from "@material-ui/core/styles";

const addChildStyles = makeStyles(theme => ({
  paper: {
    ...theme.paper,
    display: "flex",
    flexDirection: "column",
    width: "99%",
    marginBottom: "1rem",
  },
  hidden: {
    visibility: "hidden",
    alignSelf: "flex-end",
    fontSize: "2rem",
    marginTop: "2rem",
    marginRight: "2rem",
  },
  hiddenError: {
    visibility: "hidden",
  },
  close: {
    alignSelf: "flex-end",
    color: "#5b4eff",
    fontSize: "2rem",
    marginTop: "2rem",
    marginRight: "2rem",
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  firefly: {
    width: "40%",
    marginTop: "-5%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
  },
  input: {
    ...theme.input,
    width: "90%",
    marginTop: "1rem",
  }
}))

export default addChildStyles;