import React from "react";

import createProfileStyles from "./CreateAndEditProfileStyles";

import Firefly from "../../assets/icons/firefly/Firefly";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);

const EditProfilePage = () => {
    const classes = createProfileStyles();

    return (
        <div className={classes.container}>
            <div className={classes.sizingContainer}>
                <h2 className={classes.header}>EDIT PROFILE</h2>
                <div className={classes.card}>
                    <button className={classes.delete}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </button>
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
        </div>
    );
};

export default EditProfilePage;
