import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
//importing game store
import { gameContext, SELECTED_WORLD } from "../../../context/Game/GameStore";
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
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography
} from "@material-ui/core";

import { REMOVE_FIREFLY } from "../../../context/Game/GameStore.jsx";
import { removeFirefly } from "../../../utils/firebaseInteractions.jsx";


const WorldFirefly = props => {
  const [menuActive, setMenuState] = useState(false);
  const [trashActive, setTrashState] = useState(false);
  const [worldContext, worldDispatch] = useContext(gameContext);
  useEffect(() => {
    worldDispatch({ type: SELECTED_WORLD, payload: "" });
  }, []);
  console.log("this is the world context", worldContext);
  const [trashOpen, setTrashOpen] = useState(false);

  const confirmRemove = () => {
    removeFirefly(REMOVE_FIREFLY).then(() => {
      props.history.push("/choose-profile");
    });
  };

  const classes = WorldFireflyStyles();

  return (
    <div className={classes.container}>
      <div className={`${menuActive ? classes.menu : classes.hidden}`}>
        <FaArrowsAlt className={classes.move} />
        <Link to="/game">
          <FaPen className={classes.pen} />
        </Link>
        <div onClick={() => setTrashOpen(true)}>
          <FaTrashAlt className={classes.trash} />
        </div>
      </div>
      {worldContext.worlds.fireflies
        ? worldContext.worlds.fireflies.map(firefly => {
            return (
              <div onClick={() => setMenuState(!menuActive)}>
                {console.log(firefly)},
                <FFanim
                  height={129}
                  width={132}
                  accessory="none"
                  color={642}
                  awake={true}
                />
              </div>
            );
          })
        : console.log(null)}
      <Dialog
        open={trashOpen}
        onClose={() => setTrashOpen(false)}
        are-labelledby="remove-profile-dialog"
        classes={{
          paper: classes.dialogPaper
        }}
      >
        <DialogContent className={classes.dialogContainer}>
          <div className={classes.dialogTop}>
            <FFicon height={257} width={264} accessory="none" color={642} />
            <DialogContentText className={classes.dialogText}>
              BYE BYE!
            </DialogContentText>
          </div>

          <DialogActions>
            <div className={classes.dialogButtonContainer}>
              <button
                className={classes.dialogButtons + " cancel"}
                onClick={() => setTrashOpen(false)}
              >
                <FaTimes />
              </button>

              <button
                // onClick={confirmRemove}
                className={classes.dialogButtons + " remove"}
              >
                <FaCheck />
              </button>
            </div>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorldFirefly;
