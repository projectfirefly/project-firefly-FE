import React, { useContext, useState } from "react";

import createProfileStyles from "./CreateAndEditProfileStyles";

import { addProfile } from "../../utils/firebaseInteractions";

import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { ADD_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import Icon from "../../assets/icons";
import { SecondaryButton } from "../SecondaryButton";
import { PrimaryButton } from "../SecondaryButton";

const AddANewProfilePage = props => {
  const classes = createProfileStyles();

  const [childProfileState, dispatch] = useContext(childContext);

  const [updatedProfile, setUpdatedProfile] = useState({
      first_name: "",
      last_name: ""
  });

  const firstNameChanges = e => {
    setUpdatedProfile({
      ...updatedProfile,
      first_name: e.target.value
    });
  };

  const lastNameChanges = e => {
    setUpdatedProfile({
      ...updatedProfile,
      last_name: e.target.value
    });
  };

  const saveProfile = () => {
    addProfile(ADD_PROFILE, updatedProfile, dispatch).then(() => {
      props.history.push("/choose-profile");
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.sizingContainer}>
        <h2 className={classes.header}>ADD A NEW PROFILE</h2>
        <div className={classes.card}>
          <div className={classes.firefly}>
            <Icon name="Firefly" />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.firstName}>
              <h2 className={classes.h2}>First Name</h2>
              <input
                type="text"
                name="firstName"
                value={updatedProfile.first_name}
                onChange={firstNameChanges}
                className={classes.field}
              />
            </div>
            <div className={classes.lastName}>
              <h2 className={classes.h2}>Last Name</h2>
              <input
                type="text"
                name="lastName"
                className={classes.field}
                value={updatedProfile.last_name}
                onChange={lastNameChanges}
              />
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          {/* <button className={classes.button + " cancel"}>CANCEL</button> */}
          <div>
            <SecondaryButton
              text={"CANCEL"}
              // onClick={() => props.history.push("/account")}
              onClick={() => window.history.push("/account")}
            />
          </div>
          <button className={classes.button + " save"} onClick={saveProfile}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddANewProfilePage;
