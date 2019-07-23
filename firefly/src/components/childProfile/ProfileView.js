import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import image1 from "../../assets/icons/Firefly";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
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
    <React.Fragment>
      <CssBaseline />

      <Container
        className={classes.root}
        maxWidth="sm"
        component="div"
        style={{ backgroundColor: "transparent", fontFamily: "nunito" }}
      >
        <h1
          style={{
            fontSize: "20px",
            textAlign: "center",
            color: "#5B4EFF",
            fontSize: "34px",
            letterSpacing: "7px",
            fontWeight: "900",
            textTransform: "uppercase",
            fontFamily: "nunito"
          }}
        >
          My Firefly
        </h1>

        <Grid style={{ marginTop: "20px" }} container spacing={3}>
          <Grid item xs={6}>
            <div
              style={{
                background: "white",
                borderRadius: " 20px",
                boxShadow: "0px 2px 4px #000000"
              }}
            >
              <div style={{}}>
                <h4 style={{ textAlign: "right" }}> Edit</h4>
              </div>
              <h3 style={{ textAlign: "center" }}>Users name</h3>
              <img src={image1} alt="users profile" />
            </div>
            <div
              style={{
                textAlign: "center",
                border: "solid #ABB0BA 2px",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 3px #8F96A3",
                marginTop: "20px"
              }}
            >
              <Link to="/createprofile">Change Firefly</Link>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div
              style={{
                textAlign: "center",
                border: "solid #ABB0BA 2px",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 3px #8F96A3",
                marginTop: "20px",
                height: "100px"
              }}
            >
              Learn How to Play
            </div>
            <div
              s
              style={{
                textAlign: "center",
                border: "solid #ABB0BA 2px",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 3px #8F96A3",
                marginTop: "20px",
                height: "100px"
              }}
            >
              <h4>Start Playing</h4>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
