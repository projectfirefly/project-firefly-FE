import React from "react";
import { useDrag } from "react-dnd";
import itemType from "./itemType";
// import WorldFireflyStyles from "./WorldFireflyStyles";

//using for the drag item
const style = {
  position: 'absolute',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const FireflyItem = ({ id, left, top, hideSourceOnDrag, children }) => {
  // const classes = WorldFireflyStyles()
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: itemType.Firefly },
    collect: monitor => (
      console.log('hey its dragging'),
      {
      isDragging: monitor.isDragging()
    })
  })
  if (isDragging && hideSourceOnDrag) {
    return (
      <div ref={drag} />
        
     
    );
  }
  return (
    <div ref={drag} style={{...style, left, top }}>
      {children}
    </div>
  );
};

export default FireflyItem;
