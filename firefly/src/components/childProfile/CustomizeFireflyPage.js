import React, { useContext, useState } from "react";

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

  const [currentProfile] = childProfileState.user.profiles.filter(profile => {
    if (childProfileState.selected.id === profile.id) {
      return true;
    } else {
      return false;
    }
  });

  const [updatedProfile, setUpdatedProfile] = useState(currentProfile);

  const updateColor = newColor => {
    const newAvatar = { ...updatedProfile.avatar, color: newColor };
    setUpdatedProfile({ ...updatedProfile, avatar: newAvatar });
  };

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
        nickname: e.target.value
      }
    });
  };

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
              accessory={updatedProfile.accessory}
              lighttopFill={`hsl(${updatedProfile.color},100%,35%)`}
              lightmidFill={`hsl(${updatedProfile.color},100%,45%)`}
              lightbottomFill={`hsl(${updatedProfile.color},100%,55%)`}
              shineStroke={`hsl(${updatedProfile.color},100%,55%)`}
            />
          </div>
          <div className={classes.card + " right"}>
            <div style={{}}>
              <h2 className={classes.h2 + " nickname"}>NICKNAME</h2>
            </div>
            <input
              className={classes.input}
              type="text"
              value={updatedProfile.nickname}
              onChange={handleChange}
            />
            <div>
              <h2 className={classes.h2}>Accessories</h2>
              <Accessories
                accessory={updatedProfile.accessory}
                accessoryChange={accessoryChange}
              />
            </div>
            <div>
              <h2 className={classes.h2}>Light Color</h2>
              <div className={classes.slider}>
                <ColorSlider
                  value={updatedProfile.color}
                  updateColor={updateColor}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button
            className={classes.button + " back"}
            onclick="history.push(/choose-profile)"
          >
            BACK
          </button>

          {/* <Link className={classes.button} to="/myfirefly"> */}

          <button className={classes.button + " save"} onClick={saveProfile}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
