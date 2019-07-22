import React from "react";

import ChooseAvatar from "./ChooseAvatar";
import ChooseNameEtc from "./ChooseNameEtc";
import "../../styles/createProfile.scss";

export default function CreateProfile() {
  return (
    <div className="createProfile-container">
      <h1 className="createProfile-header">Create New Profile</h1>

      <div className="forms-container">
        <div className="forms-box">
          <ChooseAvatar />
        </div>
        <div className="forms-box">
          <ChooseNameEtc />
        </div>
      </div>
    </div>
  );
}
