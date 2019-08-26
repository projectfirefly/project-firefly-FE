import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { WorldNav } from "../WorldNav/WorldNav";
import WorldFirefly from "../WorldFirefly/WorldFirefly";
import TouchBackend from "react-dnd-touch-backend";
// import HTML5TouchBackend from "react-dnd-html5-touch-backend";
import { DndProvider } from "react-dnd";

const FireflyWorld = () => {
  const classes = fireflyStyles();
  return (
    <div className={classes.page}>
      <div className={classes.body}>
        <div className={classes.rootContainer}>
          <WorldNav />
          <div className={classes.fireflyContainer}>
            <DndProvider backend={TouchBackend}>
              <WorldFirefly />
            </DndProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireflyWorld;
