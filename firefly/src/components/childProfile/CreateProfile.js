import React, { useContext, useEffect, useState } from "react";

//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import ChooseAvatar from "./ChooseAvatar";
import ChooseNameEtc from "./ChooseNameEtc";
import "../../styles/createProfile.scss";

export default function CreateProfile() {

    const [childProfileState, dispatch] = useContext(childContext);

    const [currentProfile] = childProfileState.profiles.filter((profile) => {
        if (childProfileState.selected.id === profile.id) {
            return true;
        } else {
            return false;
        }
    })

    const [updatedProfile, setUpdatedProfile] = useState(currentProfile);

    const updateColor = (newColor) => {
        setUpdatedProfile({...updatedProfile, color: newColor})
    }

    const saveProfile = () => { 
        console.log(UPDATE_PROFILE)
        dispatch({ type: UPDATE_PROFILE, payload: updatedProfile });
        console.log(childProfileState.profiles);
    }

    return (
        <div className="createProfile-container">
            <h1 className="createProfile-header">Create New Profile</h1>

            <div className="forms-container">
                <div className="forms-box">
                    <ChooseAvatar value={updatedProfile.color} />
                </div>
                <div className="forms-box">
                    <ChooseNameEtc colorValue={updatedProfile.color} updateColor={updateColor} />
                </div>
            </div>
            <button onClick={saveProfile}>
                SAVE
            </button>
        </div>
    );
}
