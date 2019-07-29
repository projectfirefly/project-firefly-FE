import React from "react";
import "../styles/MyAccountPage.scss";
import { Link } from "react-router-dom";

import Icon from "../assets/icons";
import { FaPen } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="profileCardContainer">
      <div className="edit">
        <Link to="/editprofile" className="iconButton">
          <FaPen />
        </Link>
      </div>
      <p>Username</p>

      <div className="fireflyIcon">
        <Icon
          name="Firefly"
          style={{
            width: "40%"
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
