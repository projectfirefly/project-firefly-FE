import React, { useState, useContext } from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import itemType from "./itemType";
import WorldFireflyStyles from "./WorldFireflyStyles";
import fireflyStyles from "../FireflyWorld/FireflyWorldStyles";
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

//using for the drag item
const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const FireflyItem = ({ id, left, top, hideSourceOnDrag, children }) => {
  const classes = WorldFireflyStyles();
  const [worldContext, worldDispatch] = useContext(gameContext);
  const [menuActive, setMenuState] = useState(false);
  const [ffId, setFFId] = useState();
  const [trashOpen, setTrashOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: itemType.Firefly },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  if (isDragging && hideSourceOnDrag) {
    return (
      <div ref={drag} />
      // <div className={classes.draggableFirefly}>
      //   {worldContext.worlds[0].fireflies
      //     ? worldContext.worlds[0].fireflies.map(firefly => {
      //         return (
      //           <div>
      //             <div
      //               className={`${
      //                 menuActive && ffId === firefly.firefly_id
      //                   ? classes.menu
      //                   : classes.hidden
      //               }`}
      //             >
      //               <div>
      //                 <FaArrowsAlt className={classes.move} />
      //               </div>
      //               <Link to="/game">
      //                 <FaPen className={classes.pen} />
      //               </Link>
      //               <div onClick={() => setTrashOpen(true)}>
      //                 <FaTrashAlt className={classes.trash} />
      //               </div>
      //             </div>

      //             <div
      //               onClick={() => (
      //                 setFFId(firefly.firefly_id), setMenuState(!menuActive)
      //               )}
      //             >
      //               {console.log(firefly)},
      //               <FFanim
      //                 height={129}
      //                 width={132}
      //                 accessory="none"
      //                 color={642}
      //                 awake={true}
      //               />
      //             </div>
      //             <Dialog
      //               open={trashOpen}
      //               onClose={() => setTrashOpen(false)}
      //               are-labelledby="remove-profile-dialog"
      //               classes={{
      //                 paper: classes.dialogPaper
      //               }}
      //             >
      //               <DialogContent className={classes.dialogContainer}>
      //                 <div className={classes.dialogTop}>
      //                   <FFicon
      //                     height={257}
      //                     width={264}
      //                     accessory="none"
      //                     color={642}
      //                   />
      //                   <DialogContentText className={classes.dialogText}>
      //                     BYE BYE!
      //                   </DialogContentText>
      //                 </div>

      //                 <DialogActions>
      //                   <div className={classes.dialogButtonContainer}>
      //                     <button
      //                       className={classes.dialogButtons + " cancel"}
      //                       onClick={() => setTrashOpen(false)}
      //                     >
      //                       <FaTimes />
      //                     </button>

      //                     <button
      //                       // onClick={confirmRemove}
      //                       className={classes.dialogButtons + " remove"}
      //                     >
      //                       <FaCheck />
      //                     </button>
      //                   </div>
      //                 </DialogActions>
      //               </DialogContent>
      //             </Dialog>
      //           </div>
      //         );
      //       })
      //     : console.log(null)}
      // </div>
    );
  }
  return (
    <div ref={drag} style={{...style, left, top}}>
      {children}
    </div>
  );
};

export default FireflyItem;
