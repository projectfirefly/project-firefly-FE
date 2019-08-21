import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";

//material ui, styling
import Container from "@material-ui/core/Container";
import { FaPen } from "react-icons/fa";
import Book from "../../images/BookTemp.png";
import Stars from "../../images/StarsTemp.png";
import ProfileFly from "../../assets/icons/ProfileFly";

import myFireflyStyles from "./myFireflyStyles";
import { Typography } from "@material-ui/core";

export default function MyFireflyPage() {
  const classes = myFireflyStyles();

  const [childProfileState] = useContext(childContext);

  const [currentProfile, setCurrentProfile] = useState();

  useEffect(() => {
    // console.log(childProfileState);
    if (childProfileState.loaded && childProfileState.hasProfiles) {
      const [destructuredProfile] = childProfileState.user.profiles.filter(
        profile => {
          if (childProfileState.selected.id === profile.id) {
            return true;
          } else {
            return false;
          }
        }
      );
      // console.log(destructuredProfile);
      setCurrentProfile(destructuredProfile);
    }
  }, [childProfileState]);

  //Return nothing for a microsecond while currentProfile populates
  if (currentProfile) {
    return (
      <React.Fragment>
        <Container className={classes.root} component="div">
          <h1 className={classes.header}>My Firefly</h1>

          <div className={classes.mainBody}>
            <div className={classes.leftParent}>
              <div className={classes.leftContainer}>
                <div className={classes.pushRight}>
                  <Link className={classes.editContainer} to="/customize">
                    <div>
                      <div className={classes.edit}>
                        <FaPen style={{ marginRight: "5px" }} />
                      </div>
                    </div>
                  </Link>
                </div>
                <h3 className={classes.username}>
                  {currentProfile.avatar.nickname}
                </h3>
                <div className={classes.fireflyContainer}>
                  <ProfileFly
                    color={currentProfile.avatar.color}
                    accessory={currentProfile.avatar.accessory}
                  />
                </div>
              </div>

              <div className={classes.buttonContainer}>
                <Link
                  className={classes.chooseFirefly}
                  style={{ color: "#4AA810", textDecoration: "none" }}
                  to="/choose-profile"
                >
                  <Typography variant="button">Choose Firefly</Typography>
                </Link>
              </div>
            </div>

            <div className={classes.rightContainer}>
              <Link
                className={classes.rightCards}
                style={{ textDecoration: "none" }}
                to="/tutorialtest"
              >
                <div className={classes.rightCardContent}>
                  <img
                    className={classes.rightCardsImg}
                    src={Book}
                    alt={"A book"}
                  />
                  <h4 className={classes.rightCardsText}>Learn How to Play</h4>
                </div>
              </Link>

              <Link
                className={classes.rightCards + " bottom"}
                style={{ textDecoration: "none" }}
                to="/chooseworld"
              >
                <div>
                  <div className={classes.rightCardContent}>
                    <img
                      className={classes.rightCardsImg}
                      src={Stars}
                      alt={"three stars"}
                    />
                    <h4 className={classes.rightCardsText}>Start Playing</h4>{" "}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  } else {
    return <></>;
  }
}
