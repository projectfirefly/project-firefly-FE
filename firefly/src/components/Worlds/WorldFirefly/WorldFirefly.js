import React, { useState } from "react";
import { Link } from "react-router-dom";

import FFanim from "../../../assets/animations/FFanim";
import WorldFireflyStyles from "./WorldFireflyStyles";
import { FaPen, FaTrashAlt, FaArrowsAlt } from "react-icons/fa";


const WorldFirefly = () => {
  const [menuActive, setMenuState] = useState(false);
  const [trashActive, setTrashState] = useState(false);


  const classes = WorldFireflyStyles();

  return (
    <div className={classes.container}>
      <div className={`${menuActive ? classes.menu : classes.hidden}`}>
        <FaArrowsAlt className={classes.move} />
        <Link to="/game">
          <FaPen className={classes.pen} />
        </Link>
        <div onClick={() => setTrashState(!trashActive)}>
          <FaTrashAlt className={classes.trash} />
        </div>
      </div>
      {/* Delete Session */}
      <div className={classes.trashAlert}>
        <div className={classes.trashAlertBox}>{/* <h2> BYE BYE!</h2> */}</div>
      </div>

      <div onClick={() => setMenuState(!menuActive)}>
        <FFanim
          height={129}
          width={132}
          accessory="none"
          color={642}
          awake={true}
        />
      </div>
    </div>
  );
};

export default WorldFirefly;
