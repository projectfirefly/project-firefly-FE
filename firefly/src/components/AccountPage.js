import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import { Link } from "react-router-dom";
// import image1 from "../../assets/icons/Firefly.svg";
// import { FaPen } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  container: { border: "2px solid pink" },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function ProfileView() {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <h1>hello</h1>
    </Container>
  );
}
