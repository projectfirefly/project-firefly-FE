import React, { useState, useRef, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { TweenMax, TimelineMax } from "gsap/all";

//button imports
import playButtonIcon from "../../images/gameIcons/PlayCircleIcon.svg";
import playButton from "../../images/gameIcons/StartBlock.svg";

//screenshot background imports
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
    },
    playicon: {
      position: "fixed",
      top: "11.5%",
      left: "12%"
    },
    playicon2: {
      position: "fixed",
      top: "24%",
      left: "12%"
    },
    playicon3: {
      position: "fixed",
      top: "36%",
      left: "12%"
    }
  }))();

  let imgRef = useRef(null);
  let imgRef2 = useRef(null);
  let imgRef3 = useRef(null);

  const [step, setStep] = useState(0);
  const prevStep = usePrevious(step);

  const [animation, setAnimation] = useState(null);

  let tl = new TimelineMax();

  let backgroundImage = [screen1];
  // TweenMax.set(imgRef, {clearProps:"all"}),

  function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }

  useEffect(() => {
    if (prevStep > step) {
      if (step === 0) {
        setAnimation(TweenMax.set(imgRef, { clearProps: "all" }));
        setAnimation(TweenMax.set(imgRef2, { clearProps: "all" }));
      } else if (step === 1) {
        console.log("test");
        setAnimation(TweenMax.set(imgRef2, { clearProps: "all" }));
      }
    }

    if (step === 0) {
      setAnimation(
        tl.to(imgRef, 1, {
          x: 260,
          y: 350,
          delay: 1,
          ease: "Sine.easeInOut"
        })
      );
    } else if (step === 1) {
      setAnimation(
        tl.to(imgRef2, 1, {
          x: 335,
          y: 275,
          delay: 1,
          ease: "Sine.easeInOut"
        })
      );
    }
  }, [step]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.toolbox}>
          <div className={classes.playcontainer}>
            <img
              className={classes.playicon}
              src={playButton}
              ref={element => {
                imgRef = element;
              }}
            />
            <img
              className={classes.playicon2}
              src={playButton}
              ref={element => {
                imgRef2 = element;
              }}
            />
            <img
              className={classes.playicon3}
              src={playButton}
              ref={element => {
                imgRef3 = element;
              }}
            />
          </div>
        </div>
        <div className={classes.arrowcontainer}>
          {step === 0 ? (
            <img src={leftarrow} className={classes.disabled} />
          ) : (
            <img src={leftarrow} onClick={() => setStep(step - 1)} />
          )}
          {step === 4 ? (
            <img src={rightarrow} className={classes.disabled} />
          ) : (
            <img src={rightarrow} onClick={() => setStep(step + 1)} />
          )}
        </div>
        <img className={classes.image} src={backgroundImage} />
      </div>
    </div>
  );
};
export default MultiStepTutorial;
