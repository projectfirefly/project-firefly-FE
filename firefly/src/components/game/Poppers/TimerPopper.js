import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BlueArrowUp from "./../../../images/gameIcons/BlueArrowUp.svg";
import BlueArrowDown from "./../../../images/gameIcons/BlueArrowDown.svg";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Nunito"
  },

  timeDisplay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%"
  },

  time: { fontSize: "5rem", margin: "20px 0px", color: "#5B4EFF" },

  arrows: { width: "40px" },

  secondDisplay: {
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    paddingTop: "25px",
    color: "#5B4EFF"
  }
}));

const TimerPopper = ({ time, setTime }) => {
  const classes = useStyles();

  const changeNumber = operator => {
    if (operator === "up" && time < 10) {
      setTime(time + 1);
    } else if (operator === "up" && time === 10) {
      setTime(1);
    } else if (operator === "down" && time > 1) {
      setTime(time - 1);
    } else {
      setTime(10);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.timeDisplay}>
        <div onClick={() => changeNumber("up")}>
          <img src={BlueArrowUp} alt="up arrow" className={classes.arrows} />
        </div>
        <div className={classes.time}>{time}</div>
        <div onClick={() => changeNumber("down")}>
          <img
            src={BlueArrowDown}
            alt="down arrow"
            className={classes.arrows}
          />
        </div>
      </div>
      <div className={classes.secondDisplay}>sec</div>
    </div>
  );
};

export default TimerPopper;
