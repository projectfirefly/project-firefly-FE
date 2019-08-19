import React from "react";
import Lottie from "react-lottie";
import awakeanimationData from "./ffAnim.json";
import sleepingAnimation from "./sleeping.json";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

const FFanim = ({ height, width, color, accessory, awake }) => {
  function accessorySwitch( selector ) {
    if (accessory === selector) {
      return "block !important"
    } else {
      return "none !important"
    }
  }

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
        },
      },
      "& .bodyLightBottom": {
        "& path": {
          fill: `hsl(${color}, 100%, 55%)`,
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

  return (
    <div className={classes.wrapper}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default FFanim;
