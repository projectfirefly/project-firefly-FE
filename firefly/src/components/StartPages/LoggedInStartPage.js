import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import WelcomeToFirefly from "./../../images/WelcomeToFirefly.png";

import { Link } from "react-router-dom";

import firebase from "firebase";

const LoggedInStartPage = () => {
  const classes = makeStyles(theme => ({
    root: {},
    logo: {
      display: "flex",
      justifyContent: "center",
      marginTop: "3%"
    },
    fireflyImage: {
      height: "auto",
      maxWidth: "100%"
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "40%",
      height: "160px",
      margin: "0 auto",
      marginTop: "7%"
    },
    getStarted: {
      backgroundColor: "#4aa810",
      color: "#e2f5d6",
      padding: "0.8rem",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0px 3px #3e8c0d",
      cursor: "pointer",
      opacity: "0.92",
      transition: "opacity .25s ease-in-out",
      letterSpacing: "1px",
      width: "100%",

      "&:active": {
        opacity: "1",
        boxShadow: "none",
        margin: "3px 0px -3px 0px"
      },
      "&:focus": {
        outline: "none"
      }
    },
    topBar: {
      position: "absolute",
      left: "5%",
      top: "0",
      display: "flex",
      justifyContent: "space-between",
      margin: "0px 1%",
      marginTop: "2%",
      width: "90%",

    },
    topBarItem: {
      display: "flex",
      color: "#5B4EFF",
      cursor: "pointer",
      width: "110px"
    },
    topBarText: {
      fontSize: "1rem",
      marginLeft: "5%"
    }
  }))();

  const signout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <Link to="/signin" style={{ textDecoration: "none" }} onClick={signout}>
          <span className={classes.topBarItem}>
            <i className="fas fa-sign-out-alt" />
            <p className={classes.topBarText}>Sign Out</p>
          </span>
        </Link>

        <Link to="/account" style={{ textDecoration: "none" }}>
          <span className={classes.topBarItem}>
            <i className="fas fa-user-alt" />
            <p className={classes.topBarText}>My Account</p>
          </span>
        </Link>
      </div>
      <span className={classes.logo}>
        <img
          src={WelcomeToFirefly}
          alt="WelcomeToFirefly"
          className={classes.fireflyImage}
        />
      </span>
      <div className={classes.buttonContainer}>
        <Link styles={{ "text-decoration": "none" }} to="/choose-profile">
          <button className={classes.getStarted}>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default LoggedInStartPage;
