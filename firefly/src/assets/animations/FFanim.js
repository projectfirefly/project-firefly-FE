import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import awakeanimationData from "./ffAnim.json";
import sleepingAnimation from "./sleeping.json";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import anime from "animejs";

const FFanim = ({
  height,
  width,
  color,
  accessory,
  awake,
  animationList,
  playing
}) => {
  const classes = makeStyles(theme => ({
    wrapper: {
      "& .lambdahat": {
        display: `${accessorySwitch("lambdahat")}`
      },
      "& .sunglasses": {
        display: `${accessorySwitch("sunglasses")}`
      },
      "& .headphones": {
        display: `${accessorySwitch("headphones")}`
      },
      "& .nerdglasses": {
        display: `${accessorySwitch("nerdglasses")}`
      }
    }
  }))();

  //set these only when awake

  let t1 = anime.timeline({
    autoplay: false
  });
  let t2 = anime.timeline({
    autoplay: false
  });
  let t3 = anime.timeline({
    autoplay: false
  });
  let t4 = anime.timeline({
    autoplay: false
  });

  const animationParameters = {
    easing: "easeInOutQuad",
    duration: 500
  };

  const fakeArray = [
    {
      type: "timer",
      value: 1
    },
    {
      type: "color",
      value: 270
    },
    {
      type: "timer",
      value: 3
    },
    {
      type: "onOff",
      value: false
    },
    {
      type: "timer",
      value: 2
    },
    {
      type: "onOff",
      value: true
    },
    {
      type: "color",
      value: 120
    },
    {
      type: "timer",
      value: 2
    },
    {
      type: "repeat",
      value: 1
    }
  ];

  function parseColorCode(blocks) {
    //Write an add function that takes in array of objects, and/or number of times to add

    //Array of objects
    //Needs to be an array so I can add the whole array multiple times in order if there's a loop
    //Store current color
    //Each object contains duration and color and on/off
    //If setting to off, turn color to -1
    //If going from off to on, set color to previous color
    //If storing a previously existing property, push to the array
    //When I hit a loop, or the end of the blocks array, send to add function.

    //55 40 30
    //color timer switch repeat

    // {
    //   color: 52,
    //   onOff: true,
    //   timer: 3,
    // }
    // convert to
    // {
    //   fill: "hsl(color, 100%, 55%)",  //off is #e2e4e8, #c6cad1, #abafb9
    //   duration: (timer in ms),
    // }

    //if onOff === true && !element.color, element.color = currentColor

    let currentColor = 52;

    function addToAnime(array, repeat) {
      console.log(array);

      var animationRepeat = 0;
      if (repeat) {
        animationRepeat = repeat;
      }

      for (let i = 0; i <= animationRepeat; i++) {
        console.log("addToAnime");
        array.map((element, index) => {
          let keyframe = {};

          //no color, switch true
          if (
            !element.color &&
            (element.onOff === true || element.onOff === undefined)
          ) {
            keyframe = {
              ...keyframe,
              fill: currentColor
            };
          }

          //has a color
          if (element.color) {
            keyframe = {
              ...keyframe,
              fill: element.color
            };
            currentColor = element.color;
          }

          //duration
          if (element.timer) {
            keyframe = {
              ...keyframe,
              duration: element.timer * 1000
            };
          }

          if (element.onOff === false) {
            t1.add({
              ...keyframe,
              fill: "hsl(220, 12%, 90%)"
            });

            t2.add({
              ...keyframe,
              fill: "hsl(218, 11%, 80%)"
            });

            t3.add({
              ...keyframe,
              fill: "hsl(223, 9%, 70%)"
            });

            t4.add({
              ...keyframe,
              stroke: "hsl(220, 12%, 90%)"
            });
            console.log("switch false", keyframe);
          } else if (element.onOff === true || element.onOff === undefined) {
            t1.add({
              ...keyframe,
              fill: `hsl(${keyframe.fill}, 100%, 55%)`
            });

            t2.add({
              ...keyframe,
              fill: `hsl(${keyframe.fill}, 100%, 40%)`
            });

            t3.add({
              ...keyframe,
              fill: `hsl(${keyframe.fill}, 100%, 30%)`
            });

            t4.add({
              ...keyframe,
              stroke: `hsl(${keyframe.fill}, 100%, 55%)`
            });
            console.log("switch true or undefined", keyframe);
          }
        });
      }
    }

    function addFinal() {
      t1.add({
        fill: `hsl(52, 100%, 55%)`,
      });

      t2.add({
        fill: `hsl(52, 100%, 40%)`,
      });

      t3.add({
        fill: `hsl(52, 100%, 30%)`,
      });

      t4.add({
        stroke: `hsl(52, 100%, 55%)`,
      });
    }

    let codeArray = [];

    let currentCode = {};

    let currentOnOffState = true;

    //timers are breakpoints for creating currentCode object

    blocks.map((block, index) => {
      if (block.type === "color") {
        //Maybe Done
        if (index === blocks.length - 1) {
          currentCode = {
            ...currentCode,
            color: block.value
          };
          codeArray.push(currentCode);
          addToAnime(codeArray);
        } else if (
          currentCode.onOff != undefined &&
          currentCode.onOff === false
        ) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            color: block.value
          };
        } else if (currentCode["color"]) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            color: block.value
          };
        } else {
          currentCode = {
            ...currentCode,
            color: block.value
          };
        }
      } else if (block.type === "onOff") {
        //Maybe done
        if (index === blocks.length - 1) {
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
          codeArray.push(currentCode);
          addToAnime(codeArray);
        } else if (currentCode.color && block.value === false) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
        } else if (currentCode["onOff"]) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
        } else {
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
        }
      } else if (block.type === "timer") {
        //Done I think
        codeArray.push(currentCode);
        currentCode = {};
        currentCode = {
          ...currentCode,
          timer: block.value
        };
        if (index === blocks.length - 1) {
          addToAnime(codeArray);
        }
      } else if (block.type === "repeat") {
        codeArray.push(currentCode);
        currentCode = {};
        addToAnime(codeArray, block.value);
        codeArray = [];
      }
      if (index === blocks.length-1) {
        addFinal();
      }
    });
  }

  useEffect(() => {
    console.log("animationList:", animationList);

    if (awake) {
      t1 = anime.timeline({
        targets: `.${classes.wrapper} svg .bodyLightBottom path`,
        autoplay: false,
        ...animationParameters
      });
      t2 = anime.timeline({
        targets: `.${classes.wrapper} svg .bodyLightMid path`,
        autoplay: false,
        ...animationParameters
      });
      t3 = anime.timeline({
        targets: `.${classes.wrapper} svg .bodyLightTop path`,
        autoplay: false,
        ...animationParameters
      });
      t4 = anime.timeline({
        targets: `.${classes.wrapper} svg .lightL path, .${
          classes.wrapper
        } svg .lightM path, .${classes.wrapper} svg .lightR path`,
        autoplay: false,
        ...animationParameters
      });
      if (animationList) {
        parseColorCode(animationList);
      }
    }
  }, [classes.wrapper, awake, animationList, playing]);

  useEffect(() => {
    // if (playing) {
    console.log("playing", playing);
    t1.play();
    t2.play();
    t3.play();
    t4.play();
    // }
  }, [playing]);

  function accessorySwitch(selector) {
    if (accessory === selector) {
      return "block !important";
    } else {
      return "none !important";
    }
  }

  let animationData2 = {};
  if (awake) {
    animationData2 = awakeanimationData;
  } else {
    animationData2 = sleepingAnimation;
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={classes.wrapper}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default FFanim;
