import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { WorldNav } from "../WorldNav/WorldNav";
import WorldFirefly from "../WorldFirefly/WorldFirefly";
import TouchBackend from "react-dnd-touch-backend";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const FireflyWorld = () => {
  const classes = fireflyStyles();
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.page}>
        <div className={classes.body}>
          <div className={classes.rootContainer}>
            <WorldNav />
            <div className={classes.fireflyContainer}>
              <WorldFirefly />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default FireflyWorld;
