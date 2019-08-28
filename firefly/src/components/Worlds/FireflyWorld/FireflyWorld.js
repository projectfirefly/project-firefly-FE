import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { WorldNav } from "../WorldNav/WorldNav";
import WorldFirefly from "../WorldFirefly/WorldFirefly";
import TouchBackend from "react-dnd-touch-backend";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const FireflyWorld = () => {
  const classes = fireflyStyles();
  const Ipad = 'ipad';
  const Linux = 'linux';
  const uagent = navigator.userAgent.toLowerCase();
  // console.log(uagent)
  function DetectDevice(){
    if (uagent.search( Ipad || Linux ) > -1){
      // console.log('true')
      return TouchBackend;
    }else{ 
      // console.log('false')
      return HTML5Backend;
  }
}
// DetectDevice();
  return (
    <DndProvider backend={ DetectDevice() }>
      <div className={classes.page}>
        <div className={classes.body}>
          <div className={classes.rootContainer}>
            <WorldNav />
            <div>
              <WorldFirefly />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default FireflyWorld;
