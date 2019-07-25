import React, { useContext, useEffect, useState } from "react";

//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import Icon from "../../assets/icons";
import ColorSlider from "../ColorSlider/ColorSlider";
import Accessories from "../childProfile/Accessories";

import createProfileClasses from "./CreateProfileStyles";

export default function CreateProfile() {

  const classes = createProfileClasses();

  const AccSvgNames = [
    "LambdaHat",
    "NerdGlasses",
    "PinkHeadphone",
    "SunGlasses"
  ];


  const classes = makeStyles({
    rootContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "3%",
      fontFamily: "'Nunito', sans-serif"
    },
    header: {
      fontSize: "2.6rem",
      letterSpacing: "7px",
      fontWeight: "900",
      color: "#5B4EFF",
      textTransform: "uppercase"
    },
    cardContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "center"
    },
    card: {
      backgroundColor: "#FFF",
      border: "2px solid #ABB0BA",
      borderRadius: "10px",
      boxShadow: "0px 3px #8F96A3",
      width: "40%",
      margin: "3%",
      "&.left": {
        width: "30%",
        padding: "7% 3%"
      },
      "&.right": {
        padding: "3%"
      }
    },
    h2: {
      fontWeight: "600",
      margin: "3%",
      "&.nickname": {
        color: "#52ab1a"
      }
    },
    input: {
      border: "none",
      background: "#e2f5d6",
      margin: "1%",
      padding: "2%",
      borderRadius: "5px",
      width: "90%"
    },
    slider: {
      margin: "0 4%"
    }
  })();

  const [childProfileState, dispatch] = useContext(childContext);

  const [currentProfile] = childProfileState.profiles.filter(profile => {
    if (childProfileState.selected.id === profile.id) {
      return true;
    } else {
      return false;
    }
  });

  const [updatedProfile, setUpdatedProfile] = useState(currentProfile);

  const updateColor = newColor => {
    setUpdatedProfile({ ...updatedProfile, color: newColor });
  };

  const saveProfile = () => {
    dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
  };

  const handleChange = e => {
    setUpdatedProfile({
      ...updatedProfile,
      name: e.target.value
    });
  };


  const currentAcc = AccSvgNames[currentProfile.accessory];

  return (
    <div className={classes.rootContainer}>
      <h1 className={classes.header}>Customize Your Firefly</h1>

      <div className={classes.cardContainer}>
        <div className={classes.card + " left"}>
          <Icon
            name="Firefly"
            width={"100%"}
            viewBox={"0 0 1024 1024"}
            lighttopFill={`hsl(${updatedProfile.color},100%,35%)`}
            lightmidFill={`hsl(${updatedProfile.color},100%,45%)`}
            lightbottomFill={`hsl(${updatedProfile.color},100%,55%)`}
            shineStroke={`hsl(${updatedProfile.color},100%,55%)`}
          />
          {/* <Icon name={"LambdaHat"} width={"100%"} viewBox={"0 0 1024 1024"} /> */}
        </div>
        <div className={classes.card + " right"}>
          <div style={{}}>
            <h2 className={classes.h2 + " nickname"}>NICKNAME</h2>
          </div>
          <input
            className={classes.input}
            type="text"
            value={updatedProfile.name}
            onChange={handleChange}
          />
          <div>
            <h2 className={classes.h2}>Accessories</h2>
            <Accessories />
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
      <div>
        <button className={classes.button + " back"}>BACK</button>
        <button className={classes.button + " save"} onClick={saveProfile}>
          SAVE
        </button>
      </div>
    </div>
  );
}
