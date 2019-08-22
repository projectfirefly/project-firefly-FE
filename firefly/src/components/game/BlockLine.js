import React, { useState } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import StartBlockTarget from "./../../images/gameIcons/StartBlockTarget.svg";
import EmptyBlockTarget from "./../../images/gameIcons/EmptyBlockTarget.svg";
import CodeBlock from "./CodeBlock";

const List = styled.div`
  height: 100%;
  min-height: 90px;
  background: none;
  border-radius: 16px;
  width: 88%;
  overflow-x: auto;
  overflow-y: hidden;
  display: -webkit-box;
  align-items: center;
`;

const ListContainer = styled.div`
  height: 100%;
  min-height: 90px;
  background: none;
  border-radius: 16px;
  width: 88%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: 130px;
  display: -webkit-box;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
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

const BlockLine = ({
  list,
  setList,
  hasStart,
  draggingBlock,
  animationList,
  setAnimationList
}) => {
  const [openPopper, setOpenPopper] = useState(false);

  const togglePopper = (id, blocks, type, value) => {
    if (openPopper) {
      setList({
        ...list,
        [blocks]: list[blocks].map(block => {
          if (block.id === id) {
            return { ...block, [type]: value };
          }
          return block;
        })
      });
    }
    setOpenPopper(!openPopper);
  };

  return (
    <ListContainer>
      {Object.keys(list).map((blocks, i) => (
        <Droppable key={blocks} droppableId={blocks} direction="horizontal">
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

              {/* Mapping through list[blocks] to create each code block */}
              {list[blocks].length
                ? list[blocks].map((item, index) => (
                    <CodeBlock
                      key={item.id}
                      item={item}
                      index={index}
                      id={item.id}
                      openPopper={openPopper}
                      togglePopper={togglePopper}
                      list={list}
                      setList={setList}
                      blocks={blocks}
                      animationList={animationList}
                      setAnimationList={setAnimationList}
                    />
                  ))
                : !provided.placeholder && <Notice>Drop items here</Notice>}
              <Item>
                <GrayedOutBlock
                  style={
                    draggingBlock && list[blocks].length > 0
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
    </ListContainer>
  );
};

export default BlockLine;
