import React from "react";
import styled from "styled-components";
import GreenBlock from "../../assets/icons/codeblocks/GreenBlock.svg";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Item = styled.div`
  display: flex;
  user-select: none;
  background-image: url("${GreenBlock}");
  width: 78px;
  height: 77px;
  margin-left: -8px;
  border: 1px ${props => (props.isDragging ? "dashed #000" : " ")};
`;

const List = styled.div`
  min-height: 100px;
  border: 2px ${props => (props.isDraggingOver ? "solid #000" : "solid #ddd")};
  background: none;
  border-radius: 3px;
  font-family: sans-serif;
  width: 500px;
`;

const Container = styled(List)`
  display: flex;
  margin-left: 120px;
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
            <Container
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
                          {/* {item.content} */}
                        </Item>
                      )}
                    </Draggable>
                  ))
                : !provided.placeholder && <Notice>Drop items here</Notice>}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default BlockLine;
