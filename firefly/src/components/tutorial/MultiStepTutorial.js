import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";
import screen4 from "../../assets/images/screen4.png";
import screen5 from "../../assets/images/screen5.png";

import leftarrow from "../../assets/images/BlueLeftArrow.svg";
import rightarrow from "../../assets/images/BlueRightArrow.svg";

//import components for each step.
import CustomStepper from "../Steppers/CustomStepper";
import { Typography } from "@material-ui/core";

//import game
import Game from "../game/Game";

const MultiStepTutorial = () => {
  const classes = makeStyles(theme => ({
    app: {},
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D0CCFF"
    },
    image: {
      width: "100vw"
    },
    wrapper: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    arrowcontainer: {
      position: "fixed",
      bottom: "13%",
      display: "flex",
      justifyContent: "space-between",
      width: "100px",
      marginLeft: "25px"
    },
    disabled: {
      opacity: "0.5"
    }
  }))();

  const [step, setStep] = useState(0);

  switch (step) {
    default:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} className={classes.disabled} />
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen1} />
          </div>
        </div>
      );
    case 1:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img
              className={classes.image}
              src={screen2}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img
              className={classes.image}
              src={screen3}
            />
          </div>
        </div>
      );
    case 3:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img
              className={classes.image}
              src={screen4}
            />
          </div>
        </div>
      );
    case 4:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <img src={rightarrow} className={classes.disabled}/>
            </div>
            <img
              className={classes.image}
              src={screen5}
              onClick={() => setStep(0)}
            />
          </div>
        </div>
      );
  }
};

export default MultiStepTutorial;
