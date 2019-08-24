import React, { useState } from "react";
import { useDrop } from "react-dnd";
import itemType from "./itemType";
import FireflyItem from "./FireflyItem";
import update from "immutability-helper";
//styles
import WorldFireflyStyles from "./WorldFireflyStyles";



const FireflyContainer = ({ hideSourceOnDrag }) => {
  
  const classes = WorldFireflyStyles();

  const [fireflies, setFireflies] = useState({
    a: { top: 40, left: 80, title:'firefly one'},
    b: { top: 180, left: 20, title:'firefly two' }
  });
  const [, drop] = useDrop({
    accept: itemType.Firefly,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveFirefly(item.id, left, top);
      return undefined;
    }
  });
  const moveFirefly = (id, left, top) => {
    setFireflies(
      update(fireflies, {
        [id]: {
          $merge: { left, top }
        }
      })
    );
  };

  return (
    <div ref={drop} className={classes.fireflyContainer}>
      {Object.keys(fireflies).map(key => {
        const { left, top, title } = fireflies[key]
        return (
          <FireflyItem
          key={key}
          id={key}
          left={left}
          top={top}
          hideSourceOnDrag={hideSourceOnDrag} >
            {title}
          </FireflyItem>
        );
      })}
    </div>
  );
};

export default FireflyContainer;
