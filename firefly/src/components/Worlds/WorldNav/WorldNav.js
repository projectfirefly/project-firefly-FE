import React from "react";
import { Link } from "react-router-dom";

import WorldNavStyles from "./WorldNavStyles";
import { FaTimes, FaPlus } from "react-icons/fa";

import FireflyOutline from "../../../assets/icons/firefly/OutlineFrieflyIcon.svg";
import { Typography } from "@material-ui/core";

export const WorldNav = () => {
  const classes = WorldNavStyles();

  return (
    <div className={classes.navContainer}>
      <div className={classes.iconButton} onClick={""}>
        <Link to="/chooseworld" className={classes.link}>
          <Typography variant="button">
            <FaTimes />
          </Typography>
        </Link>
      </div>

      <div className={classes.addButton} onClick={""}>
        <Link to="/game" className={classes.link}>
          <Typography variant="button">
            <FaPlus />
            <FaTimes />
          </Typography>
        </Link>
      </div>
      {/* <FireflyOutline /> */}
    </div>
  );
};
