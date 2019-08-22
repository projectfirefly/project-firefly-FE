import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { addFirefly } from "../../../utils/firebaseInteractions";

//Styling
import WorldNavStyles from "./WorldNavStyles";
import { FaTimes, FaPlus } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import FireflyOutline from "../../../assets/icons/firefly/OutlineFrieflyIcon.svg";

//Context
import { gameContext, ADD_FIREFLY } from "../../../context/Game/GameStore";
import { childContext } from "../../../context/ChildProfiles/ChildProfileStore";

export const WorldNav = props => {
  const classes = WorldNavStyles();

  const [worldContext, worldDispatch] = useContext(gameContext);
  const [context, contextDispatch] = useContext(childContext);

  const newFF = props => {
    addFirefly(
      context.selected.id,
      worldContext.selected.id,
      worldDispatch
    ).then(() => {
      // console.log("console log from nav" + props);
      // props.history.push("/game");
    });
  };

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
        <Link className={classes.link} onClick={newFF}>
          <Typography variant="button">
            <FaPlus />
            {/* <FireflyOutline />  */}
          </Typography>
        </Link>
      </div>
    </div>
  );
};
