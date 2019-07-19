import React from "react";
import firefly from "./Firefly";


const Icon = props => {
  switch (props.name) {
    case "firefly":
      return <firefly {...props} />;
    default:
      return <div />;
  }
};
export default Icon;
