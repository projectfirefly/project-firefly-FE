import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  position: relative;
  width: 100px;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  margin: 0 -10px 0 0;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 3px;
`;

const CodeBlock = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Item
          ref={provided.innerRef}
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          style={provided.draggableProps.style}
        >
          <Block>
            {item.content}
            {item.functionality}
          </Block>
        </Item>
      )}
    </Draggable>
  );
};

export default CodeBlock;
