import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Popper from "./Popper.js";
import CheckCircleIcon from "./../../images/gameIcons/CheckCircleIcon.svg";
import ToggleOnIcon from "./../../images/gameIcons/ToggleOnIcon.svg";
import ToggleOffIcon from "./../../images/gameIcons/ToggleOffIcon.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checkmark: {
    position: "absolute",
    top: "25%",
    left: "30%",
    width: "40px"
  },

  container: {
    display: "flex",
    flexDirection: "column"
  },

  tool: {
    display: "flex",
    position: "relative",
    width: "100px"
  },

  item: {
    display: "flex",
    userSelect: "none",
    margin: "0 -10px 0 0",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderRadius: "3px"
  },

  toggleOn: {
    position: "absolute",
    top: "32%",
    left: "30%"
  },

  toggleOff: {
    position: "absolute",
    top: "32%",
    left: "30%"
  }
});

const CodeBlock = ({ item, index, togglePopper, openPopper }) => {
  const classes = useStyles();

  const [togglePalette, setTogglePalette] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [toggleCount, setToggleCount] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(false);

  //state that's used in lower levels. These are passed in props to different poppers
  const [checkedSwitch, setCheckedSwitch] = useState(false);

  const setPalette = () => {
    setTogglePalette(!togglePalette);
  };

  const setTimer = () => {
    setToggleTimer(!toggleTimer);
  };

  const setCount = () => {
    setToggleCount(!toggleCount);
  };

  const setSwitch = () => {
    setToggleSwitch(!toggleSwitch);
  };

  return (
    <Draggable
      key={item.id}
      draggableId={item.id}
      index={index}
      isDragDisabled={openPopper}
    >
      {(provided, snapshot) => (
        <div className={classes.container}>
          <div
            className={classes.item}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={provided.draggableProps.style}
          >
            {item.rsi === 3 ? (
              <Popper
                onClick={
                  !openPopper || togglePalette
                    ? () => {
                        togglePopper();
                        setPalette();
                      }
                    : null
                }
                open={openPopper}
                togglePalette={togglePalette}
              >
                {togglePalette ? (
                  <div className={classes.tool}>
                    {item.content}
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div className={classes.tool}>
                    {item.content}
                    {item.functionality}
                  </div>
                )}
              </Popper>
            ) : item.rsi === 4 ? (
              <Popper
                onClick={
                  !openPopper || toggleTimer
                    ? () => {
                        togglePopper();
                        setTimer();
                      }
                    : null
                }
                open={openPopper}
                toggleTimer={toggleTimer}
              >
                {toggleTimer ? (
                  <div className={classes.tool}>
                    {item.content}
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div className={classes.tool}>
                    {item.content}
                    {item.functionality}
                  </div>
                )}
              </Popper>
            ) : item.rsi === 5 ? (
              <Popper
                onClick={
                  !openPopper || toggleCount
                    ? () => {
                        togglePopper();
                        setCount();
                      }
                    : null
                }
                open={openPopper}
                toggleCount={toggleCount}
              >
                {toggleCount ? (
                  <div className={classes.tool}>
                    {item.content}
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div className={classes.tool}>
                    {item.content}
                    {item.functionality}
                  </div>
                )}
              </Popper>
            ) : item.rsi === 6 ? (
              <Popper
                onClick={
                  !openPopper || toggleSwitch
                    ? () => {
                        togglePopper();
                        setSwitch();
                      }
                    : null
                }
                checkedSwitch={checkedSwitch}
                setCheckedSwitch={setCheckedSwitch}
                open={openPopper}
                toggleSwitch={toggleSwitch}
              >
                {toggleSwitch ? (
                  <div className={classes.tool}>
                    {item.content}
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div className={classes.tool}>
                    {item.content}
                    {checkedSwitch ? (
                      <img
                        src={ToggleOnIcon}
                        alt="toggle on"
                        className={classes.toggleOn}
                      />
                    ) : (
                      <img
                        src={ToggleOffIcon}
                        alt="toggle off"
                        className={classes.toggleOff}
                      />
                    )}
                  </div>
                )}
              </Popper>
            ) : (
              //These are for the start, led, and repeat buttons because they dont have poppers
              <div className={classes.tool}>
                {item.content}
                {item.functionality}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CodeBlock;
