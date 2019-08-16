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

const CountPopper = ({ number, setNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={
          number === 1
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(1)}
      >
        1
      </div>

      <div
        className={
          number === 2
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(2)}
      >
        2
      </div>
      <div
        className={
          number === 3
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(3)}
      >
        3
      </div>
      <div
        className={
          number === 4
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(4)}
      >
        4
      </div>
      <div
        className={
          number === 5
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(5)}
      >
        5
      </div>
      <div
        className={
          number === 6
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(6)}
      >
        6
      </div>
      <div
        className={
          number === 7
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(7)}
      >
        7
      </div>
      <div
        className={
          number === 8
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(8)}
      >
        8
      </div>
      <div
        className={
          number === 9
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => setNumber(9)}
      >
        9
      </div>
    </div>
  );
};

export default CountPopper;
