import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { WorldNav } from "../WorldNav/WorldNav";
import WorldFirefly from "../WorldFirefly/WorldFirefly";
import FireflyContainer from '../WorldFirefly/FireflyContainer';

import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


const FireflyWorld = () => {
  const classes = fireflyStyles();
  return (
    <DndProvider backend={HTML5Backend}>
    <div className={classes.page}>
      <div className={classes.body}>
        <div className={classes.rootContainer}>
          <WorldNav />
          <div className={classes.fireflyContainer}>
            <FireflyContainer />
          </div>
        </div>
      </div>
    </div>
    </DndProvider>
  );
};

export default FireflyWorld;
