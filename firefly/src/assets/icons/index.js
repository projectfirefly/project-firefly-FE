import React from "react";
import Firefly from "./firefly/Firefly";
import ProfileFly from "./ProfileFly";

const Icon = props => {
  switch (props.name) {
    case "Firefly":
      return <Firefly {...props} />;
    case "ProfileFly":
      return <ProfileFly {...props} />;
    default:
      return <div />;
  }
};
export default Icon;
