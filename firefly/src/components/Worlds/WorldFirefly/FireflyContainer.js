import React, { useState, useContext } from "react";
import WorldFirefly from "./WorldFirefly";
import fireflyStyles from "../FireflyWorld/FireflyWorldStyles";
import { DropTarget, useDrop } from "react-dnd";

import { gameContext } from "../../../context/Game/GameStore";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    firefly: monitor.getItem()
  };
}
function myDropTarget(){
  const[collectedProps, drop] = useDrop({
    accept
  })
}
const FireflyContainer = () => {
  const [worldContext, worldDispatch] = useContext(gameContext);
  const propThis = worldContext.worlds[0].fireflies.map(firefly => {
    console.log(firefly);
  });
  const { connectDropTarget, fireflyItem } = propThis;
  //variable for the styles
  const classes = fireflyStyles();

  return connectDropTarget(
    <div ref={drop} className={classes.fireflyContainer}>
      <WorldFirefly />
    </div>
  );
};

export default DropTarget("firefly", {}, collect)(FireflyContainer);
