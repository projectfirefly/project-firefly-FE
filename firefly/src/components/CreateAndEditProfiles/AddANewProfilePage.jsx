import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { addProfile } from "../../utils/firebaseInteractions";

import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { ADD_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

//Styling
import Icon from "../../assets/icons";
import createProfileStyles from "./CreateAndEditProfileStyles";

//Button Components
import { SecondaryButton } from "../../utils/buttons/SecondaryButton";
import { PrimaryButton } from "../../utils/buttons/PrimaryButton";

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
          <div className={classes.button}>
            <Link to="/account">
              <SecondaryButton text={"CANCEL"} />
            </Link>
          </div>

          <div className={classes.button}>
            <Link onClick={saveProfile}>
              <PrimaryButton text={"SAVE"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddANewProfilePage;
