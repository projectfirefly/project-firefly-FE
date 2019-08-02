import React, { useContext, useState, useEffect } from "react";

//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import Icon from "../../assets/icons";
import ColorSlider from "../ColorSlider/ColorSlider";
import Accessories from "./Accessories";

import { Link } from "react-router-dom";

import createProfileClasses from "./CreateProfileStyles";

export default function CustomizeFireflyPage() {
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

  const saveProfile = () => {
    dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
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

  if (
    childProfileState.loaded &&
    childProfileState.hasProfiles &&
    updatedProfile
  ) {
    return (
      <div className={classes.rootContainer}>
        <h1 className={classes.header}>Customize Your Firefly</h1>

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
                <h2 className={classes.h2}>Accessories</h2>
                <Accessories
                  accessory={updatedProfile.avatar.accessory}
                  accessoryChange={accessoryChange}
                />
              </div>
              <div>
                <h2 className={classes.h2}>Light Color</h2>
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
          <a href="/choose-profile" className={classes.a}>
            <button
              className={classes.button + " back"}
              onclick="window.history.back(-1)"
            >
              BACK
            </button>
          </a>

          <a href="/myfirefly" className={classes.a}>
            <button onClick={saveProfile} className={classes.button + " save"}>
              SAVE
            </button>
          </a>
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
