import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../styles/MyAccountPage.scss";
import { Link } from "react-router-dom";

import image1 from "../assets/icons/Firefly.svg";
import { FaPen } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: " 20px"
  }
}));

export default function ProfileView() {
  const classes = useStyles();

  return (
    <Container className="root" maxWidth="lg">
      <h1 className="header">My Account</h1>

      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <h2 className="sectionHeader">Account Information</h2>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div className="infoLabel">Email</div>
              </Grid>
              <Grid item xs={6}>
                <div className="userInfo">Users Email</div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div className="infoLabel">Name</div>
              </Grid>
              <Grid item xs={6}>
                <div className="userInfo">Users Name</div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div className="infoLabel">Address</div>
              </Grid>
              <Grid item xs={6}>
                <div className="userInfo">Users Address</div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4} className="rightCards">
          <Paper className={classes.paper}>
            <h2 className="sectionHeader">Manage Profile</h2>
            <div className="firefly">
              <p>New Profile</p>
              {/* <img src={image1} alt="users profile" /> */}
              <div className="edit">
                <FaPen />
                Edit
              </div>
              <p>Username</p>
            </div>
          </Paper>
          <div className="button">
            <Link style={{ color: "white", textDecoration: "none" }} to="">
              Back to Game
            </Link>
          </div>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <h2 className="sectionHeader"> Payment Information</h2>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <h2 className="sectionHeader">
              Educational Research Participation
            </h2>
            <div className="research-section">
              <div className="checkbox-container">
                <label class="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkbox-custom"> {""}</span>
                </label>
              </div>
              <p>I would like to participate in the Educational Research</p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
