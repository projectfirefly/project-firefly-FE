import React, { useContext, useEffect, useState } from "react";

//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";

import ChooseAvatar from "./ChooseAvatar";
import ColorSlider from "../ColorSlider/ColorSlider";
import "../../styles/createProfile.scss";

export default function CreateProfile() {
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

    const handleChange = (e) => {
        setUpdatedProfile({
            ...updatedProfile,
            name: e.target.value
        })
    }

    return (
        <div className="createProfile-container">
            <h1 className="createProfile-header">Create New Profile</h1>

            <div className="forms-container">
                <div className="forms-box">
                    <ChooseAvatar value={updatedProfile.color} />
                </div>
                <div className="forms-box">
                    <div style={{}}>
                        <h2 className="inputLabel">Nickname</h2>
                    </div>
                    <input 
                        className="input" 
                        type="text" 
                        value={updatedProfile.name}
                        onChange={handleChange}
                    />

                    <div>
                        <h2>Accessories</h2>
                    </div>

                    <div>
                        <h2>Light Color</h2>
                        <ColorSlider
                            value={updatedProfile.color}
                            updateColor={updateColor}
                        />
                    </div>
                </div>
            </div>
            <button onClick={saveProfile}>SAVE</button>
        </div>
    );
}
