import React from "react";
import WorldNavStyles from "./WorldNavStyles";
import { FaTimes } from "react-icons/fa";

export const WorldNav = () => {
  const classes = WorldNavStyles();

  return (
    <div className={classes.navContainer}>
      <div className={classes.iconButton} onClick={""}>
        <FaTimes />
      </div>
    </div>
  );
};
