import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PalettePopper from "./Poppers/PalettePopper";
import TimerPopper from "./Poppers/TimerPopper";
import RepeatPopper from "./Poppers/RepeatPopper";
import OnOffPopper from "./Poppers/OnOffPopper";
import uifx from "uifx";

//importing the sound
import clickMP3 from "../../assets/sounds/Button.mp3";
//making the sound variable
const click = new uifx({ asset: clickMP3 });
/* 
have to add the click.play() to the popper but when I do right now the game freezes up and becomes laggy 
*/
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
  },

  popperBlock: {
    position: "relative"
  }
}));

export default function Popper({
  children,
  onClick,
  open,
  togglePalette,
  toggleTimer,
  toggleRepeat,
  toggleOnOff,
  onOff,
  setOnOff,
  repeat,
  setRepeat,
  time,
  setTime,
  color,
  setColor
}) {
  const classes = useStyles();

  return (
    <div className={classes.popperBlock}>
      <div className={classes.root} onClick={onClick}>
        {children}
      </div>
      <div
        // onClick={click.play()}
        className={
          togglePalette
            ? classes.popperPaletteContainer
            : toggleRepeat
            ? classes.popperCountContainer
            : toggleOnOff
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
        ) : toggleRepeat && open ? (
          <RepeatPopper repeat={repeat} setRepeat={setRepeat} />
        ) : toggleOnOff && open ? (
          <OnOffPopper onOff={onOff} setOnOff={setOnOff} />
        ) : null}
      </div>
    </div>
  );
}
