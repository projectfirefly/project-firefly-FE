import React, { useState } from "react";
import { useDrop } from "react-dnd";
import itemType from './itemType';
import FireflyItem from './FireflyItem';
import fireflyStyles from "../FireflyWorld/FireflyWorldStyles";
import update from 'immutability-helper';
import { object } from "prop-types";


const FireflyContainer = ({ hideSourceOnDrag }) => {
  const [fireflies, setFireflies] = useState([
    
  ])
    const[, drop] = useDrop({
      accept: itemType.Firefly,
      drop(item,monitor){
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveFirefly(item.id, left, top)
      return undefined
      },
    })
    const moveFirefly = (id, left, top) => {
      setFireflies(
        update(fireflies, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    }
  //variable for the styles
  const classes = fireflyStyles();

  return (
    <div ref={drop} className={classes.fireflyContainer}>
      {Object.keys(fireflies).map(key => {
      const { left, top, } = fireflies[key]
      return(
      <FireflyItem />
      )})}
    </div>
  );
};

export default FireflyContainer;
