import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PalettePopper from "./Poppers/PalettePopper";
import TimerPopper from "./Poppers/TimerPopper";
import CountPopper from "./Poppers/CountPopper";
import SwitchPopper from "./Poppers/SwitchPopper";

const useStyles = makeStyles(theme => ({
  root: {},

  none: {
    visibility: "hidden",
    position: "absolute"
  },

  popperPaletteContainer: {
    width: "300px",
    padding: "22px;",
    background: "white",
    position: "absolute",
    textAlign: "center",
    transition: "300ms",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    marginTop: "5px"
  },

  popperCountContainer: {
    width: "175px",
    padding: "16px",
    background: "white",
    position: "absolute",
    textAlign: "center",
    transition: "300ms",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    marginTop: "5px"
  },

  popperSwitchContainer: {
    width: "175px",
    padding: "16px",
    background: "white",
    position: "absolute",
    transition: "300ms",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    marginTop: "5px"
  },

  popperTimerContainer: {
    width: "150px",
    padding: "24px;",
    background: "white",
    position: "absolute",
    transition: "300ms",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    marginTop: "5px"
  }
}));

export default function Popper({
  children,
  onClick,
  open,
  togglePalette,
  toggleTimer,
  toggleCount,
  toggleSwitch,
  checkedSwitch,
  setCheckedSwitch,
  number,
  setNumber,
  time,
  setTime,
  color,
  setColor
}) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root} onClick={onClick}>
        {children}
      </div>
      <div
        className={
          togglePalette
            ? classes.popperPaletteContainer
            : toggleCount
            ? classes.popperCountContainer
            : toggleSwitch
            ? classes.popperSwitchContainer
            : toggleTimer
            ? classes.popperTimerContainer
            : classes.none
        }
      >
        {togglePalette && open ? (
          <PalettePopper color={color} setColor={setColor} />
        ) : toggleTimer && open ? (
          <TimerPopper time={time} setTime={setTime} />
        ) : toggleCount && open ? (
          <CountPopper number={number} setNumber={setNumber} />
        ) : toggleSwitch && open ? (
          <SwitchPopper
            checkedSwitch={checkedSwitch}
            setCheckedSwitch={setCheckedSwitch}
          />
        ) : null}
      </div>
    </div>
  );
}
