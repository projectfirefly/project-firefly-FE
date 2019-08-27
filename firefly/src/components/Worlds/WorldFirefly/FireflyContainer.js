import React, { useState, useContext } from "react";
import WorldFirefly from "./WorldFirefly";
import fireflyStyles from "../FireflyWorld/FireflyWorldStyles";
import { DropTarget } from "react-dnd";

import { gameContext } from "../../../context/Game/GameStore";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    item: monitor.getItem()
  };
}

const FireflyContainer = () => {
  const [worldContext, worldDispatch] = useContext(gameContext);
  console.log(worldContext.selected);
  // const { connectDropTarget, item } = '';
  // //variable for the styles
  // const classes = fireflyStyles();

  // return connectDropTarget(
  //     <div className={classes.fireflyContainer}>
  //     <WorldFirefly />
  //     </div>
  // )
  return <div />;
};

export default DropTarget("item", {}, collect)(FireflyContainer);
