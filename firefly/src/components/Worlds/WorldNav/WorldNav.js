import React from "react";
import WorldNavStyles from "./WorldNavStyles";
import { FaTimes, FaPlus } from "react-icons/fa";
import FireflyOutline from "../../../assets/icons/firefly/OutlineFrieflyIcon.svg";

export const WorldNav = () => {
  const classes = WorldNavStyles();

  return (
    <div className={classes.navContainer}>
      <div className={classes.iconButton} onClick={""}>
        <FaTimes />
      </div>

      <div className={classes.addButton} onClick={""}>
        <FaPlus />
        <FaTimes />
      </div>
      {/* <FireflyOutline /> */}
    </div>
  );
};
