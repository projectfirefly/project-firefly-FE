import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import awakeanimationData from "./ffAnim.json";
import sleepingAnimation from "./sleeping.json";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import anime from "animejs";

const FFanim = ({ height, width, color, accessory, awake }) => {

  const [whatever, setWhatever] = useState("")

  const myRef = React.createRef();

  const classes = makeStyles(theme => ({
    wrapper: {
      "& .lambdahat": {
        display: `${accessorySwitch("lambdahat")}`,
      },
      "& .sunglasses": {
        display: `${accessorySwitch("sunglasses")}`,
      },
      "& .headphones": {
        display: `${accessorySwitch("headphones")}`,
      },
      "& .nerdglasses": {
        display: `${accessorySwitch("nerdglasses")}`,
      },
      "& .bodyLightTop": {
        "& path": {
          fill: `hsl(${color}, 100%, 30%)`,
        },
      },
      "& .bodyLightMid": {
        "& path": {
          fill: `hsl(${color}, 100%, 40%)`,
          transition: "fill 2s ease-in-out",
        },
      },
      "&.whatever": {
        "& .bodyLightMid": {
          "& path": {
            fill: `hsl(359, 100%, 40%)`,
            transition: "fill 2s ease-in-out",
          }
        }
      },
      "& .bodyLightBottom": {
        "& path": {
          fill: `#000`,
        },
      },
      "& .lightL": {
        "& path": {
          stroke: `hsl(${color}, 100%, 55%)`,
        },
      },
      "& .lightM": {
        "& path": {
          stroke: `hsl(${color}, 100%, 55%)`,
        },
      },
      "& .lightR": {
        "& path": {
          stroke: `hsl(${color}, 100%, 55%)`,
        },
      },
    },
  }))();

  useEffect(() => {
    console.log(myRef.current);
    anime({
      targets: `${myRef.current} .bodyLightBottom path`,
      fill: `#FFF`,
      easing: 'easeInOutQuad',
      round: 1,
      loop: true,
    });
  }, [])

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
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function whatnever() {
    setWhatever(".whatever");
  }

  return (
    <div ref={myRef} className={classes.wrapper + " " + whatever}>
      <button onClick={whatnever}>WHATEVER</button>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default FFanim;
