import React, { useContext, useState } from "react";

import createProfileStyles from "./CreateAndEditProfileStyles";

import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { ADD_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import Icon from "../../assets/icons";

const AddANewProfilePage = (props) => {
    const classes = createProfileStyles();

    const [childProfileState, dispatch] = useContext(childContext);

    const [updatedProfile, setUpdatedProfile] = useState({
        name: "",
        color: 61,
        accessory: 0
    });

    const handleChanges = e => {
        setUpdatedProfile({
            ...updatedProfile,
            name: e.target.value
        })
    }

    const saveProfile = () => {
        dispatch({ type: ADD_PROFILE, payload: updatedProfile })
        props.history.push("/choose-profile")
    }

    return (
        <div className={classes.container}>
            <div className={classes.sizingContainer}>
                <h2 className={classes.header}>ADD A NEW PROFILE</h2>
                <div className={classes.card}>
                    <div className={classes.firefly}>
                        <Icon
                            name="Firefly"
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.firstName}>
                            <h2 className={classes.h2}>First Name</h2>
                            <input
                                type="text"
                                name="firstName"
                                value={updatedProfile.name}
                                onChange={handleChanges}
                                className={classes.field}
                            />
                        </div>
                        <div className={classes.lastName}>
                            <h2 className={classes.h2}>Last Name</h2>
                            <input type="text" name="lastName" className={classes.field} />
                        </div>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <button
                        className={classes.button + " cancel"}
                        onClick={() => props.history.push("/choose-profile")}
                    >
                        CANCEL
                    </button>
                    <button
                        className={classes.button + " save"}
                        onClick={saveProfile}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddANewProfilePage;
