import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  none: {
    visibility: "hidden",
    position: "absolute"
  },

  numberIconContainer: {
    width: "50px",
    margin: "5px 0px",
    cursor: "pointer",
    fontFamily: "Nunito",
    fontSize: "2rem",
    border: "2px solid #AFB4BE",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    color: "#AFB4BE"
  },

  numberActiveIconContainer: {
    width: "50px",
    margin: "5px 0px",
    cursor: "pointer",
    fontFamily: "Nunito",
    fontSize: "2rem",
    border: "2px solid #6459FF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    color: "#6053FF",
    backgroundColor: "#D0CCFF"
  }
}));

const CountPopper = () => {
  const classes = useStyles();

  const [numberOne, setNumberOne] = useState(true);
  const [numberTwo, setNumberTwo] = useState(false);
  const [numberThree, setNumberThree] = useState(false);
  const [numberFour, setNumberFour] = useState(false);
  const [numberFive, setNumberFive] = useState(false);
  const [numberSix, setNumberSix] = useState(false);
  const [numberSeven, setNumberSeven] = useState(false);
  const [numberEight, setNumberEight] = useState(false);
  const [numberNine, setNumberNine] = useState(false);

  const [activeNumber, setActiveNumber] = useState(
    numberOne
      ? "one"
      : numberTwo
      ? "two"
      : numberThree
      ? "three"
      : numberFour
      ? "four"
      : numberFive
      ? "five"
      : numberSix
      ? "six"
      : numberSeven
      ? "seven"
      : numberEight
      ? "eight"
      : "nine"
  );

  const pushActiveNumber = active => {
    setNumberOne(active === "one" ? true : false);
    setNumberTwo(active === "two" ? true : false);
    setNumberThree(active === "three" ? true : false);
    setNumberFour(active === "four" ? true : false);
    setNumberFive(active === "five" ? true : false);
    setNumberSix(active === "six" ? true : false);
    setNumberSeven(active === "seven" ? true : false);
    setNumberEight(active === "eight" ? true : false);
    setNumberNine(active === "nine" ? true : false);
  };

  return (
    <div className={classes.container}>
      <div
        className={
          numberOne
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("one")}
      >
        1
      </div>

      <div
        className={
          numberTwo
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("two")}
      >
        2
      </div>
      <div
        className={
          numberThree
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("three")}
      >
        3
      </div>
      <div
        className={
          numberFour
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("four")}
      >
        4
      </div>
      <div
        className={
          numberFive
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("five")}
      >
        5
      </div>
      <div
        className={
          numberSix
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("six")}
      >
        6
      </div>
      <div
        className={
          numberSeven
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("seven")}
      >
        7
      </div>
      <div
        className={
          numberEight
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("eight")}
      >
        8
      </div>
      <div
        className={
          numberNine
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => pushActiveNumber("nine")}
      >
        9
      </div>
    </div>
  );
};

export default CountPopper;
