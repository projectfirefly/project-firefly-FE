import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { WorldNav } from "../WorldNav/WorldNav";
import WorldFirefly from "../WorldFirefly/WorldFirefly";

const FireflyWorld = () => {
  const classes = fireflyStyles();

  return (
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
  );
};

export default FireflyWorld;
