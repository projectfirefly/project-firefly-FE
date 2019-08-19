import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

//import components for each step. 
import CustomStepper from "../Steppers/CustomStepper";
import { Typography } from "@material-ui/core";

//import game
import Game from "../game/Game"

const MultiStepTutorial = () => {
  const classes = makeStyles(theme => ({
    app: {},
    header: {
      ...theme.headerMargin,
      marginBottom: "2rem",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    second: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    third: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    wrapper: {
      width: "100%"
    }
  }))();

const [step, setStep] = useState(0);

const updateStep = operation => {
operation === "add" ? setStep(step + 1) : setStep(step - 1);
};

 return step === 0 ? (
    <div className={classes.root}>
      <div className={classes.header}>
        <Game   />
      </div>
      <div className={classes.wrapper}>
      </div>
    </div>
  ) : step === 1 ? (
      <div>
    </div>
  ) : (
      <div>
    </div>
  );
};

export default MultiStepTutorial;