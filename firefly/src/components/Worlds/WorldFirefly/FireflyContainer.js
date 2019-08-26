import React, { useState } from "react";
import { useDrop } from "react-dnd";
import itemType from "./itemType";
import FireflyItem from "./FireflyItem";
import update from "immutability-helper";
//styles
import WorldFireflyStyles from "./WorldFireflyStyles";

// 1)need to import the gameContext to get the world info
// 2)need to forEach the worldContext and push it to a new variable
// 3)need to need the fireflies from the worldContext to the fireflies state using the variable
// 4)need to make a component for the firefly to render on the fireflyContainer as a item I think this can be done the same way we did it before
// 5)need to figure out way the left and top is not updating and make it where the fireflies have a collision box around them so they can not be moved of screen and so they do not render on top of each other
// 6)need to figure out how to enable mouse events for the touch backend 

const FireflyContainer = ({ hideSourceOnDrag }) => {
  
  const classes = WorldFireflyStyles();

  const [fireflies, setFireflies] = useState({
    a: { top: 40, left: 80, title:'firefly one'},
    b: { top: 180, left: 20, title:'firefly two' },
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
