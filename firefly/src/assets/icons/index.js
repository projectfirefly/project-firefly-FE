import React from "react";
import Firefly from "./firefly/Firefly";

const Icon = props => {
  switch (props.name) {
    case "Firefly":
      return <Firefly {...props} />;
    default:
      return <div />;
  }
};
export default Icon;
