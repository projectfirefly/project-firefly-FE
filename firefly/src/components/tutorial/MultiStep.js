import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";
import screen4 from "../../assets/images/screen4.png";
import screen5 from "../../assets/images/screen5.png";
import screen6 from "../../assets/images/screen6.png";
import screen7 from "../../assets/images/screen7.png";

import leftarrow from "../../assets/images/BlueLeftArrow.svg";
import rightarrow from "../../assets/images/BlueRightArrow.svg";

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
      bottom: "11%",
      display: "flex",
      justifyContent: "space-between",
      width: "100px",
      marginLeft: "31px"
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
              <img src={rightarrow} onClick={() => setStep(step + 1)}/>
            </div>
            <img
              className={classes.image}
              src={screen5}
            />
          </div>
        </div>
      );
      case 5:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <img src={rightarrow} onClick={() => setStep(step + 1)}/>
            </div>
            <img
              className={classes.image}
              src={screen6}
            />
          </div>
        </div>
      );
      case 6:
        return (
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <div className={classes.arrowcontainer}>
                <img src={leftarrow} onClick={() => setStep(step - 1)} />
                <img src={rightarrow} className={classes.disabled}/>
              </div>
              <img
                className={classes.image}
                src={screen7}
              />
            </div>
          </div>
        );
  }
};

export default MultiStepTutorial;