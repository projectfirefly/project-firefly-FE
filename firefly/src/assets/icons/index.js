import React from "react";
import Firefly from "./firefly/Firefly";
import ProfileFly from "./ProfileFly";
import LambdaHat from "./accessories/LambdaHat";

const Icon = props => {
  switch (props.name) {
    case "Firefly":
      return <Firefly {...props} />;
    case "LambdaHat":
      return <LambdaHat {...props} />;
    case "ProfileFly":
      return <ProfileFly {...props} />;
    default:
      return <div />;
  }
};
export default Icon;
