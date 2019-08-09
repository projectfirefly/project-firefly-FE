import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Trash = styled.div`
  height: 150px;
  width: 150px;
  &:hover {
    background: rgba(255, 0, 0, 0.66);
    font-size: 64px;
    transition: 0.3s;
    color: gray;
  }
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 48px;
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

const DropDelete = () => {
  return (
    <Droppable
      droppableId="TRASH"
      isDropDisabled={false}
      direction="horizontal"
    >
      {(provided, snapshot) => (
        <Trash
          ref={provided.innerRef}
          innerRef={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          <FontAwesomeIcon icon="trash-alt" />
        </Trash>
      )}
    </Droppable>
  );
};

export default DropDelete;
