import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Trash = styled.div`
  height: 150px;
  width: 150px;
  &:hover {
    background: #dc143c;
    font-size: 68px;
    transition: 0.3s;
    translate(50px 50px);
    color: #e3e5e8;
  }
  border-top-left-radius: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 55px;
  color: #abb0ba;
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
          <FontAwesomeIcon
            icon="trash-alt"
            style={{ paddingLeft: "50px", paddingTop: "50px" }}
          />
        </Trash>
      )}
    </Droppable>
  );
};

export default DropDelete;
