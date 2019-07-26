import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../styles/accountPage.scss";
import { Link } from "react-router-dom";

import image1 from "../assets/icons/Firefly.svg";
import { FaPen, FaPlus } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: " 20px",
    marginBottom: "5%",
    overflow: "scroll",
    height: "70%"
  }
}));

export default function ProfileView() {
  const classes = useStyles();

  return (
    <Container className="root" maxWidth="lg">
      <h1 className="header">My Account</h1>

      <div className="container">
        <div className="left">
          {/* Account Info */}
          <div className="leftContainer">
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
          </div>
          {/* Payment Info */}
          <div className="leftContainer">
            <Paper className={classes.paper}>
              <h2 className="sectionHeader"> Payment Information</h2>
              <br />
              <br />
            </Paper>
          </div>
          {/* Educational Research */}
          <div className="leftContainer">
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
          </div>
        </div>

        <div className="rightCards">
          <Paper className={classes.paper}>
            <h2 className="sectionHeader">Manage Profile</h2>
            <div className="firefly">
              <div className="edit">
                <div className="iconButton">
                  <FaPlus />
                </div>
              </div>
              <p>New Profile</p>
              <img className="firefly" src={image1} alt="users profile" />
              <hr class="style1" />
              <div className="edit">
                <Link className="iconButton" to="/child-profiles-main">
                  <FaPen />
                </Link>
              </div>
              <p>Username</p>
              <img className="firefly" src={image1} alt="users profile" />
            </div>
          </Paper>

          <div className="button">
            <Link style={{ color: "white", textDecoration: "none" }} to="">
              Back to Game
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
