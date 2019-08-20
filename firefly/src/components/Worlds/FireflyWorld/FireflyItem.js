import React from 'react';
import { DragSource } from 'react-dnd';
import FFanim from "../../../assets/animations/FFanim";

const itemSource = {
    beginDrag(props) {
      console.log('dragging');
      return props.item;
    },
    endDrag(props, monitor) {
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

    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
    <div className="item" style={{ opacity }}>
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
  
  export default DragSource('item', itemSource, collect)(FireflyItem);