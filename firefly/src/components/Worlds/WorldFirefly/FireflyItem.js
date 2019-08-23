import React from 'react';
import { DragSource } from 'react-dnd';
import FFanim from "../../../assets/animations/FFanim";

const dragSource = {
    beginDrag(props) {
      console.log('dragging');
      return props.item;
    },
    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
        return;
      }
      return props.handleDrop(props.item.id);
    }
  }
  
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }
  }

const FireflyItem = () => {

    const { isDragging, connectDragSource, fireflyItem } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
    <div style={{ opacity }}>
    {/* add the draggable firefly here */}
        <FFanim
            height={129}
            width={132}
            accessory="none"
            color={642}
            awake={true}
        />
    </div>
    );

  }
  
  export default DragSource('firefly', dragSource, collect)(FireflyItem);