import React, { useContext } from "react";
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { Link } from "react-router-dom";
import chooseProfileStyles from './chooseProfileStyles';

//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

//Components
import ProfileFly from "../../assets/icons/ProfileFly";

const ChooseProfilePage = props => {
  const [childProfileState, dispatch] = useContext(childContext);

  console.log("Choose Profile State", childProfileState);

  const classes = chooseProfileStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.header}> CHOOSE YOUR FIREFLY </Typography>
      <div className={classes.sizingContainer}>
        <div className={classes.cardContainer}>
          {childProfileState.user.profiles.map(profile => (
            <div className={classes.card} onClick={() => {
              dispatch({
                type: "UPDATE_SELECTED",
                payload: profile.id
              });
              props.history.push("/myfirefly");
            }}
            >
              <div className={classes.text}>
                <Typography variant="h4" className={classes.name}>{profile.first_name}</Typography>
              </div>
              <div className={classes.flysize}>
                <ProfileFly
                  color={profile.avatar.color}
                  accessory={profile.avatar.accessory}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={classes.backButtonContainer}>
          <Link to="/startgame" className={classes.backButtonStyle}>
            <Typography variant="button">
              Back
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseProfilePage;
