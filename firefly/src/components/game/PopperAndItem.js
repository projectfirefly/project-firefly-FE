import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Popper from "./Popper.js";

const PopperAndItemStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tool = styled.div`
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

const PopperAndItem = ({ item, index }) => {
  const [togglePalette, setTogglePalette] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [toggleCount, setToggleCount] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);

  const toggleEverythingButPalette = () => {
    if (toggleCount || toggleTimer || toggleSwitch) {
      setTogglePalette(!togglePalette);
      setToggleCount(false);
      setToggleSwitch(false);
      setToggleTimer(false);
    }
    setOpenPopper(!openPopper);
    setTogglePalette(!togglePalette);
    setToggleCount(false);
    setToggleSwitch(false);
    setToggleTimer(false);
  };
  const toggleEverythingButCount = () => {
    if (toggleTimer || togglePalette || toggleSwitch) {
      setTogglePalette(false);
      setToggleCount(!toggleCount);
      setToggleSwitch(false);
      setToggleTimer(false);
    }
    setOpenPopper(!openPopper);
    setTogglePalette(false);
    setToggleCount(!toggleCount);
    setToggleSwitch(false);
    setToggleTimer(false);
  };
  const toggleEverythingButSwitch = () => {
    if (toggleCount || togglePalette || toggleTimer) {
      setTogglePalette(false);
      setToggleCount(false);
      setToggleSwitch(!toggleSwitch);
      setToggleTimer(false);
    }
    setOpenPopper(!openPopper);
    setTogglePalette(false);
    setToggleCount(false);
    setToggleSwitch(!toggleSwitch);
    setToggleTimer(false);
  };
  const toggleEverythingButTimer = () => {
    if (toggleCount || togglePalette || toggleSwitch) {
      setTogglePalette(false);
      setToggleCount(false);
      setToggleSwitch(false);
      setToggleTimer(!toggleTimer);
    }
    setOpenPopper(!openPopper);
    setTogglePalette(false);
    setToggleCount(false);
    setToggleSwitch(false);
    setToggleTimer(!toggleTimer);
  };
  return (
    <Draggable
      key={item.id}
      draggableId={item.id}
      index={index}
      isDragDisabled={openPopper}
    >
      {(provided, snapshot) => (
        <PopperAndItemStyle>
          <Item
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={provided.draggableProps.style}
          >
            {item.rsi === 3 ? (
              <Popper
                onClick={() => toggleEverythingButPalette()}
                open={togglePalette}
                togglePalette={togglePalette}
              >
                <Tool>
                  {item.content}
                  {item.functionality}
                </Tool>
              </Popper>
            ) : item.rsi === 4 ? (
              <Popper
                onClick={() => toggleEverythingButTimer()}
                open={toggleTimer}
                toggleTimer={toggleTimer}
              >
                <Tool>
                  {item.content}
                  {item.functionality}
                </Tool>
              </Popper>
            ) : item.rsi === 5 ? (
              <Popper
                onClick={() => toggleEverythingButCount()}
                open={toggleCount}
                toggleCount={toggleCount}
              >
                <Tool>
                  {item.content}
                  {item.functionality}
                </Tool>
              </Popper>
            ) : item.rsi === 6 ? (
              <Popper
                onClick={() => toggleEverythingButSwitch()}
                open={toggleSwitch}
                toggleSwitch={toggleSwitch}
              >
                <Tool>
                  {item.content}
                  {item.functionality}
                </Tool>
              </Popper>
            ) : (
              <Tool>
                {item.content}
                {item.functionality}
              </Tool>
            )}
          </Item>
        </PopperAndItemStyle>
      )}
    </Draggable>
  );
};

export default PopperAndItem;
