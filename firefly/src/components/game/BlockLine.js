import React, { useState } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import StartBlockTarget from "./../../images/gameIcons/StartBlockTarget.svg";
import EmptyBlockTarget from "./../../images/gameIcons/EmptyBlockTarget.svg";
import PopperAndItem from "./PopperAndItem";
import CodeBlock from "./CodeBlock";

const List = styled.div`
  height: 100%;
  min-height: 90px;
  background: none;
  border-radius: 16px;
  width: 88%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: 130px;
  display: -webkit-box;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  margin: 0 -10px 0 0;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 3px;
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

const GrayedOutBlock = styled.div`
  display: flex;
  opacity: 0.7;
  position: relative;
  width: 97px;
`;

const ButtonBox = styled.img`
  width: 100%;
`;

const BlockLine = ({ state, hasStart, draggingBlock }) => {
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
              {/* Conditional rendering of first start block in code line */}

              <GrayedOutBlock style={hasStart ? { display: "none" } : null}>
                <ButtonBox src={StartBlockTarget} alt="startblock" />
              </GrayedOutBlock>
              {state[list].length
                ? state[list].map((item, index) => (
                    <PopperAndItem key={index} item={item} index={index} />
                    // <CodeBlock item={item} index={index} />
                  ))
                : !provided.placeholder && <Notice>Drop items here</Notice>}
              <Item>
                <GrayedOutBlock
                  style={
                    draggingBlock && state[list].length > 0
                      ? {
                          marginLeft: "10px",
                          position: "relative",
                          zIndex: "-1"
                        }
                      : {
                          display: "none"
                        }
                  }
                >
                  <ButtonBox src={EmptyBlockTarget} alt="emptyblock" />
                </GrayedOutBlock>
              </Item>
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default BlockLine;
