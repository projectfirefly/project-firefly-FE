import React from "react";
import Lottie from "react-lottie";
import animationData from "./chillingFly.json";

const ChillingFly = ({ height = 160, width = 160 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  let ht = height || 160;
  let wd = width || 160;

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default ChillingFly;
