import React, { useState, useContext } from "react";
import { DragSource } from "react-dnd";
import { Link } from "react-router-dom";
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
// const dragSource = {
//     beginDrag(props) {
//       console.log('dragging');
//       return props.item;
//     },
//     endDrag(props, monitor, component) {
//       if (!monitor.didDrop()) {
//         return;
//       }
//       return props.handleDrop(props.item.id);
//     }
//   }

//   function collect(connect, monitor) {
//     return {
//       connectDragSource: connect.dragSource(),
//       connectDragPreview: connect.dragPreview(),
//       isDragging: monitor.isDragging(),
//     }
//   }

const FireflyItem = () => {
  const [menuActive, setMenuState] = useState(false);
  const [ffId, setFFId] = useState();
  const [worldContext, worldDispatch] = useContext(gameContext);
  const [trashOpen, setTrashOpen] = useState(false);
  const classes = WorldFireflyStyles();

  return (
    <div>
      {worldContext.worlds[0].fireflies
        ? worldContext.worlds[0].fireflies.map(firefly => {
            return (
              <div>
                <div
                  className={`${
                    menuActive && ffId === firefly.firefly_id
                      ? classes.menu
                      : classes.hidden
                  }`}
                >
                  <div>
                    <FaArrowsAlt className={classes.move} />
                  </div>
                  <Link to="/game">
                    <FaPen className={classes.pen} />
                  </Link>
                  <div onClick={() => setTrashOpen(true)}>
                    <FaTrashAlt className={classes.trash} />
                  </div>
                </div>

                <div
                  onClick={() => (
                    setFFId(firefly.firefly_id), setMenuState(!menuActive)
                  )}
                >
                  {console.log(firefly)},
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
                  classes={{
                    paper: classes.dialogPaper
                  }}
                >
                  <DialogContent className={classes.dialogContainer}>
                    <div className={classes.dialogTop}>
                      <FFicon
                        height={257}
                        width={264}
                        accessory="none"
                        color={642}
                      />
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
          })
        : console.log(null)}
    </div>
  );
  // const { isDragging, connectDragSource, fireflyItem } = this.props;
  // const opacity = isDragging ? 0 : 1;

  // return connectDragSource(
  // <div style={{ opacity }}>
  // {/* add the draggable firefly here */}
  //     <FFanim
  //         height={129}
  //         width={132}
  //         accessory="none"
  //         color={642}
  //         awake={true}
  //     />
  // </div>
  // );
};

export default FireflyItem;
