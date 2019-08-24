import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
//importing game store
import {
  gameContext,
  SELECTED_WORLD,
  REMOVE_FIREFLY
} from "../../../context/Game/GameStore";
//importing the firebase stuff needed
import { removeFirefly } from "../../../utils/firebaseInteractions.jsx";
import FFanim from "../../../assets/animations/FFanim";
import FFicon from "../../../assets/icons/firefly/Firefly";
import WorldFireflyStyles from "./WorldFireflyStyles";
import {
  FaPen,
  FaTrashAlt,
  FaArrowsAlt,
  FaTimes,
  FaCheck
} from "react-icons/fa";
import {
  Dialog,
  // DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
  // Typography
} from "@material-ui/core";
//DRAG and DROP stuff

import FireflyContainer from "./FireflyContainer";
import FireflyItem from "./FireflyItem";

const WorldFirefly = () => {
  const [menuActive, setMenuState] = useState(false);
  const [ffId, setFFId] = useState();
  const [worldContext, worldDispatch] = useContext(gameContext);
  const [trashOpen, setTrashOpen] = useState(false);
  const classes = WorldFireflyStyles();
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  // const [trashActive, setTrashState] = useState(false);
  // const confirmRemove = () => {
  //   removeFirefly(REMOVE_FIREFLY).then(() => {
  //     props.history.push("/choose-profile");
  //   });
  // };

  return <FireflyContainer hideSourceOnDrag={hideSourceOnDrag} />;
};

export default WorldFirefly;
