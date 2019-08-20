import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { WorldNav } from "../WorldNav/WorldNav";
//the target area for the drop items  
import FireflyContainer from "../FireflyWorld/FireflyContainer.js";
//the draggable items 
import FireflyItem from '../FireflyWorld/FireflyItem.js';
// import HTML5Backend from 'react-dnd-html5-backend';
// import {DragDropContext} from 'react-dnd'



const FireflyWorld = () => {
  const classes = fireflyStyles();

  return (
    <div className={classes.page}>
      <div className={classes.body}>
        <div className={classes.rootContainer}>
          <WorldNav />
          <FireflyContainer />

        </div>
      </div>
    </div>
  );
};

export default FireflyWorld;
