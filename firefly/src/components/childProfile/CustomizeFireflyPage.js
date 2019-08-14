import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";


//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";
import { updateProfile } from "../../utils/firebaseInteractions";




//components
import { PrimaryButton } from "../../utils/buttons/PrimaryButton";
import { SecondaryButton } from "../../utils/buttons/SecondaryButton";
import ColorSlider from "../ColorSlider/ColorSlider";
import Accessories from "./Accessories";

import createProfileClasses from "./CreateProfileStyles";
import Icon from "../../assets/icons";
import { Typography } from "@material-ui/core";


export default function CustomizeFireflyPage(props) {
  const classes = createProfileClasses();

  const [childProfileState, dispatch] = useContext(childContext);

  const [updatedProfile, setUpdatedProfile] = useState();

  const updateColor = newColor => {
    const newAvatar = { ...updatedProfile.avatar, color: newColor };
    setUpdatedProfile({ ...updatedProfile, avatar: newAvatar });
  };

  useEffect(() => {
    if (childProfileState.loaded && childProfileState.hasProfiles) {
      const [currentProfile] = childProfileState.user.profiles.filter(
        profile => {
          if (childProfileState.selected.id === profile.id) {
            return true;
          } else {
            return false;
          }
        }
      );
      setUpdatedProfile(currentProfile);
    }
  }, [childProfileState]);

  const saveProfile = async () => {
    await updateProfile(UPDATE_PROFILE, updatedProfile, dispatch);
    props.history.push("/myfirefly");
  };

  const accessoryChange = i => {
    const newAvatar = { ...updatedProfile.avatar, accessory: i };
    setUpdatedProfile({ ...updatedProfile, avatar: newAvatar });
  };

  const handleChange = e => {
    setUpdatedProfile({
      ...updatedProfile,
      avatar: {
        ...updatedProfile.avatar,
        nickname: e.target.value,
      },
    });
  };

  //Return nothing for a microsecond while updatedProfile populates.
  if (
    updatedProfile
  ) {
    return (
      <div className={classes.rootContainer}>
        <h1 className={classes.header}>
          <Typography variant="h1">
            Customize Your Firefly
          </Typography>
        </h1>

        <div className={classes.sizingContainer}>
          <div className={classes.cardContainer}>
            <div className={classes.card + " left"}>
              <Icon
                name="Firefly"
                width={"100%"}
                viewBox={"0 0 1024 1024"}
                accessory={updatedProfile.avatar.accessory}
                lighttopFill={`hsl(${updatedProfile.avatar.color},100%,35%)`}
                lightmidFill={`hsl(${updatedProfile.avatar.color},100%,45%)`}
                lightbottomFill={`hsl(${updatedProfile.avatar.color},100%,55%)`}
                shineStroke={`hsl(${updatedProfile.avatar.color},100%,55%)`}
              />
            </div>
            <div className={classes.card + " right"}>
              <div style={{}}>
                <h2 className={classes.h2 + " nickname"}>NICKNAME</h2>
              </div>
              <input
                className={classes.input}
                type="text"
                value={updatedProfile.avatar.nickname}
                onChange={handleChange}
              />
              <div>
                <h2 className={classes.h2}>ACCESSORIES</h2>
                <Accessories
                  accessory={updatedProfile.avatar.accessory}
                  accessoryChange={accessoryChange}
                />
              </div>
              <div className={classes.lightColor}>
                <h2 className={classes.h2}>LIGHT COLOR</h2>
                <div className={classes.slider}>
                  <ColorSlider
                    value={updatedProfile.avatar.color}
                    updateColor={updateColor}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Link to='/choose-profile' className={classes.a}>
            <SecondaryButton
              text={"BACK"}
              onClick={"window.history.back(-1)"}
            />
          </Link>
          <div className={classes.a} onClick={saveProfile}>
            <PrimaryButton text={"SAVE"} />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
