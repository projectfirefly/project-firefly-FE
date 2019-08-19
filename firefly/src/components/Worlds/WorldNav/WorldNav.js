import React from "react";
import WorldNavStyles from "./WorldNavStyles";
import { FaTimes, FaPlus } from "react-icons/fa";
import FireflyOutline from "../../../assets/icons/firefly/OutlineFrieflyIcon.svg";
import { Typography } from "@material-ui/core";

export const WorldNav = () => {
  const classes = WorldNavStyles();

  return (
    <div className={classes.navContainer}>
      <div className={classes.iconButton} onClick={""}>
        <Typography variant="button">
          <FaTimes />
        </Typography>
      </div>

      <div className={classes.addButton} onClick={""}>
        <Typography variant="button">
          <FaPlus />
          <FaTimes />
        </Typography>
      </div>
      {/* <FireflyOutline /> */}
    </div>
  );
};
