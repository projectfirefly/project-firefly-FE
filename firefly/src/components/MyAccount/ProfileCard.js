import React, {useContext} from "react";
import "../../styles/MyAccountPage.scss";
import { Link } from "react-router-dom";

import Icon from "../../assets/icons";
import { FaPen } from "react-icons/fa";

//context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_SELECTED } from "../../context/ChildProfiles/ChildProfileStore";

const ProfileCard = (props) => {

  const [context, dispatch] = useContext(childContext)

  const editButton = async () => {
    console.log(props.id)
    await dispatch({type: UPDATE_SELECTED, payload: props.id})
    props.history.push("/editprofile")
  }

  return (
    <div className="profileCardContainer">
      <div className="edit">
        <p>{props.name}</p>
        <div onClick={editButton} className="iconButton">
          <FaPen />
        </div>
      </div>

      <div className="fireflyIcon">
        <Icon
          name="Firefly"
          style={{
            width: "40%",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
