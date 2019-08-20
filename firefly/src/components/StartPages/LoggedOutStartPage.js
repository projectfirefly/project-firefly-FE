import React from "react";
import WelcomeToFirefly from "./../../images/WelcomeToFirefly.png";

import startPageStyles from './StartPageStyles';

import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const LoggedOutStartPage = () => {

  const classes = startPageStyles();

  return (
    <div className={classes.root}>
      <span className={classes.logo}>
        <img
          src={WelcomeToFirefly}
          alt="WelcomeToFirefly"
          className={classes.fireflyImage}
        />
      </span>
      <div className={classes.buttonContainer}>
        <Link className={classes.startButton} to="/signup">
          <Typography variant="button">Get Started</Typography>
        </Link>
        <Link className={classes.secondaryButton} to="/signin">
          <Typography variant="button">
            I Already Have An Account
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default LoggedOutStartPage;
