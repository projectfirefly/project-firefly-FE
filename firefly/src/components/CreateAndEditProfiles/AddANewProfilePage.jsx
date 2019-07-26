import React from "react";

import createProfileStyles from "./CreateAndEditProfileStyles";

import Firefly from "../../assets/icons/firefly/Firefly";

const AddANewProfilePage = () => {
  const classes = createProfileStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>ADD A NEW PROFILE</h2>
      <div className={classes.card}>
        <div className={classes.firefly}>
          <Firefly />
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.firstName}>
            <h2 className={classes.h2}>First Name</h2>
            <input type="text" name="firstName" className={classes.field} />
          </div>
          <div className={classes.lastName}>
            <h2 className={classes.h2}>Last Name</h2>
            <input type="text" name="lastName" className={classes.field} />
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button + " cancel"}>CANCEL</button>
        <button className={classes.button + " save"}>SAVE</button>
      </div>
    </div>
  );
};

export default AddANewProfilePage;
