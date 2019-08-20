import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeToFirefly from "./../../images/WelcomeToFirefly.png";
import { Link } from "react-router-dom";
import firebase from "firebase";
import {
  childContext,
  SIGN_OUT,
} from "../../context/ChildProfiles/ChildProfileStore";
import startPageStyles from "./StartPageStyles";
import { Typography } from "@material-ui/core";

const LoggedInStartPage = () => {
  const [childProfileState, dispatch] = useContext(childContext);

  const classes = startPageStyles();

  const signout = () => {
    firebase.auth().signOut();
    dispatch({ type: SIGN_OUT });
  };

  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <Link to="/signin" className={classes.topBarButton} onClick={signout}>
          <i className="fas fa-sign-out-alt" />
        </Link>

        <Link to="/account" className={classes.topBarButton}>
          <i className="fas fa-user-alt" />
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
        {childProfileState.loaded ? (
          <Link
            className={classes.startButton}
            to={
              childProfileState.hasProfiles ? "/choose-profile" : "/addprofile"
            }
          >
            <Typography variant="button">Start</Typography>
          </Link>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LoggedInStartPage;
