import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";
import screen4 from "../../assets/images/screen4.png";
import screen5 from "../../assets/images/screen5.png";

//import components for each step. 
import CustomStepper from "../Steppers/CustomStepper";
import { Typography } from "@material-ui/core";

//import game
import Game from "../game/Game"

const MultiStepTutorial = () => {
  const classes = makeStyles(theme => ({
    app: {},
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: '100vw',
      border: '1px solid black',
    },

  }))();

const [step, setStep] = useState(0);

  switch(step) {
    default: 
      return <div className={classes.root}>
                <div className={classes.wrapper}>
                  <img className={classes.image} src={screen1} onClick={() => setStep(step + 1)}/>
                </div>
              </div>;
    case 1:
      return <div className={classes.root}>

                <div className={classes.wrapper}>
                  <img className={classes.image} src={screen2} onClick={() => setStep(step + 1)}/>
                </div>
              </div>;
    case 2:
      return <div className={classes.root}>

                <div className={classes.wrapper}>
                  <img className={classes.image} src={screen3} onClick={() => setStep(step + 1)}/>
                </div>
              </div>;      
    case 3:
      return <div className={classes.root}>

                <div className={classes.wrapper}>
                  <img className={classes.image} src={screen4} onClick={() => setStep(step + 1)}/>
                </div>
              </div>;      
    case 4:
      return <div className={classes.root}>

                <div className={classes.wrapper}>
                  <img className={classes.image} src={screen5} onClick={() => setStep(0)}/>
                </div>
              </div>;      
  }

};

export default MultiStepTutorial;