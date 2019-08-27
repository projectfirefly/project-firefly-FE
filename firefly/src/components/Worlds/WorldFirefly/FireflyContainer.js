import React, { useState, useContext } from "react";
import { useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import itemType from "./itemType";
import FireflyItem from "./FireflyItem";
import update from "immutability-helper";

//importing the firebase stuff needed
import { removeFirefly } from "../../../utils/firebaseInteractions.jsx";
import FFanim from "../../../assets/animations/FFanim";
import FFicon from "../../../assets/icons/firefly/Firefly";
import {
  gameContext,
  SELECTED_WORLD,
  REMOVE_FIREFLY
} from "../../../context/Game/GameStore";
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

//styles
import WorldFireflyStyles from "./WorldFireflyStyles";
import fireflyStyles from "../FireflyWorld/FireflyWorldStyles";


// 1)need to import the gameContext to get the world info
// 2)need to forEach the worldContext and push it to a new variable
// 3)need to need the fireflies from the worldContext to the fireflies state using the variable
// 4)need to make a component for the firefly to render on the fireflyContainer as a item I think this can be done the same way we did it before
// 5)need to figure out way the left and top is not updating and make it where the fireflies have a collision box around them so they can not be moved of screen and so they do not render on top of each other
// 6)need to figure out how to enable mouse events for the touch backend

const FireflyContainer = ({ hideSourceOnDrag }) => {
  const classes = fireflyStyles();
  const classed = WorldFireflyStyles();
  const styles = {
    width: 600,
    height: 600,
    border: "1px solid black",
    position: "relative"
  };

  const [worldContext, worldDispatch] = useContext(gameContext);
  const [menuActive, setMenuState] = useState(false);
  const [ffId, setFFId] = useState();
  const [trashOpen, setTrashOpen] = useState(false);

  const theFireflies = worldContext.worlds[0].fireflies
    ? worldContext.worlds[0].fireflies.map(fireflies => {
        return fireflies;
      })
    : null;
  const [fireflies, setFireflies] = useState([
    ...theFireflies
  ]);
  console.log(fireflies)
  const [, drop] = useDrop({
    accept: itemType.Firefly,
    drop(item, monitor) {
      console.log(item,'this is the item from drop')
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveFirefly(item.id, left, top);
      return undefined;
    }
  });
  const moveFirefly = (id, left , top) => {
    console.log(id, left, top, 'this is the moveFirefly')

    const updatedFireflies = fireflies.map((firefly) =>{
      console.log(firefly)
      if(firefly.firefly_id === id){
        return {
          ...firefly,
          x: left,
          y: top,
        }
      } else {
        return firefly
      }
    })

    setFireflies(
      [
        ...updatedFireflies
      ]
    );
  };

  return (
    <div ref={drop} className={classes.fireflyContainer}>
      {fireflies.map(firefly => {
        return (
          <FireflyItem
            key={firefly.firefly_id}
            id={firefly.firefly_id}
            left={firefly.x}
            top={firefly.y}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {/* {console.log(firefly.firefly_id)} */}
            <div className={classed.draggableFirefly}>
              <div
                className={`${
                  menuActive && ffId === firefly.firefly_id
                    ? classed.menu
                    : classed.hidden
                }`}
              >
                <div>
                  <FaArrowsAlt className={classed.move} />
                </div>
                <Link to="/game">
                  <FaPen className={classed.pen} />
                </Link>
                <div onClick={() => setTrashOpen(true)}>
                  <FaTrashAlt className={classed.trash} />
                </div>
              </div>

              <div
                onClick={() => (
                  setFFId(firefly.firefly_id), setMenuState(!menuActive)
                )}
              >
                <FFanim
                  height={129}
                  width={132}
                  accessory="none"
                  color={642}
                  awake={true}
                />
              </div>
              <Dialog
                open={trashOpen}
                onClose={() => setTrashOpen(false)}
                are-labelledby="remove-profile-dialog"
                classed={{
                  paper: classed.dialogPaper
                }}
              >
                <DialogContent className={classed.dialogContainer}>
                  <div className={classed.dialogTop}>
                    <FFicon
                      height={257}
                      width={264}
                      accessory="none"
                      color={642}
                    />
                    <DialogContentText className={classed.dialogText}>
                      BYE BYE!
                    </DialogContentText>
                  </div>

                  <DialogActions>
                    <div className={classed.dialogButtonContainer}>
                      <button
                        className={classed.dialogButtons + " cancel"}
                        onClick={() => setTrashOpen(false)}
                      >
                        <FaTimes />
                      </button>

                      <button
                        // onClick={confirmRemove}
                        className={classed.dialogButtons + " remove"}
                      >
                        <FaCheck />
                      </button>
                    </div>
                  </DialogActions>
                </DialogContent>
              </Dialog>
            </div>
          </FireflyItem>
        );
      })}
    </div>
  );
};

export default FireflyContainer;
