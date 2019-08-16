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

  number: { fontSize: "5rem", margin: "20px 0px", color: "#5B4EFF" },

  arrows: { width: "40px" },

  secondDisplay: {
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    paddingTop: "25px",
    color: "#5B4EFF"
  }
}));

const TimerPopper = () => {
  const classes = useStyles();

  const [number, setNumber] = useState(1);

  const changeNumber = operator => {
    if (operator === "up" && number < 10) {
      setNumber(number + 1);
    } else if (operator === "up" && number === 10) {
      setNumber(1);
    } else if (operator === "down" && number > 1) {
      setNumber(number - 1);
    } else {
      setNumber(10);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.timeDisplay}>
        <div onClick={() => changeNumber("up")}>
          <img src={BlueArrowUp} alt="up arrow" className={classes.arrows} />
        </div>
        <div className={classes.number}>{number}</div>
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
