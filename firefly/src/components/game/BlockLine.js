import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const List = styled.div`
  min-height: 100px;
  border: 2px ${props => (props.isDraggingOver ? "solid #000" : "solid #ddd")};
  background: none;
  border-radius: 3px;
  width: 88%;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-left: 130px;
  display: -webkit-box;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  margin: 0 -10px 0 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
`;

const Tool = styled.div`
  display: flex;
  position: relative;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

const BlockLine = ({ state }) => {
  return (
    <div>
      {Object.keys(state).map((list, i) => (
        <Droppable key={list} droppableId={list} direction="horizontal">
          {(provided, snapshot) => (
            <List
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {state[list].length
                ? state[list].map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Item
                          ref={provided.innerRef}
                          innerRef={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={provided.draggableProps.style}
                        >
                          <Tool>
                            {item.content}
                            {item.functionality}
                          </Tool>
                        </Item>
                      )}
                    </Draggable>
                  ))
                : !provided.placeholder && <Notice>Drop items here</Notice>}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default BlockLine;
