import React, { useContext, useState } from "react";

//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_PROFILE, REMOVE_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import createProfileStyles from "./CreateAndEditProfileStyles";

import Icon from "../../assets/icons";

import { Link } from "react-router-dom";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";

library.add(faTrashAlt);

const EditProfilePage = (props) => {
    const classes = createProfileStyles();

    const [childProfileState, dispatch] = useContext(childContext);

    const [currentProfile] = childProfileState.profiles.filter(profile => {
        if (childProfileState.selected.id === profile.id) {
            return true;
        } else {
            return false;
        }
    });

    const [updatedProfile, setUpdatedProfile] = useState(currentProfile);

    const handleChanges = e => {
        setUpdatedProfile({
            ...updatedProfile,
            name: e.target.value
        })
    }

    const saveProfile = () => {
        dispatch({ type: UPDATE_PROFILE, payload: updatedProfile })
        props.history.push("/choose-profile")
    }

    const [open, setOpen] = useState(false);

    const removeProfile = () => {
        dispatch({ type: REMOVE_PROFILE, payload: updatedProfile })
        props.history.push("/choose-profile")
    }

    return (
        <div className={classes.container}>
            <div className={classes.sizingContainer}>
                <h2 className={classes.header}>EDIT PROFILE</h2>
                <div className={classes.cardContainer}>
                    <button className={classes.delete} onClick={() => setOpen(true)}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </button>
                    <div className={classes.card}>
                        <div className={classes.firefly}>
                            <Icon
                                name="Firefly"
                                accessory={updatedProfile.accessory}
                                lighttopFill={`hsl(${
                                    updatedProfile.color
                                    },100%,35%)`}
                                lightmidFill={`hsl(${
                                    updatedProfile.color
                                    },100%,45%)`}
                                lightbottomFill={`hsl(${
                                    updatedProfile.color
                                    },100%,55%)`}
                                shineStroke={`hsl(${
                                    updatedProfile.color
                                    },100%,55%)`}
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
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                are-labelledby="remove-profile-dialog"
                classes={{
                    paper: classes.dialogPaper,
                }}
            >
                <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
                    <span className={classes.dialogTitle}>
                        Are you sure you want to remove {currentProfile.name}'s profile?
                        </span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        All data and progress associated with this profile will be removed. This action is permanent and can not be undone. Are you absolutely certain you want to remove this profile?
                    </DialogContentText>
                    <DialogActions>
                        <div className={classes.dialogButtonContainer}>
                            <button onClick={() => setOpen(false)} className={classes.dialogButtons + " cancel"}>
                                Cancel
                            </button>
                            <button onClick={removeProfile} className={classes.dialogButtons + " remove"}>
                                Remove
                            </button>
                        </div>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EditProfilePage;
