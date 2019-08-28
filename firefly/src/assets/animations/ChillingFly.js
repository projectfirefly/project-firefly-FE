import React from "react";
import Lottie from "react-lottie";
import animationData from "./chillingFly.json";

const ChillingFly = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return <Lottie options={defaultOptions} height={160} width={160} />;
};

export default ChillingFly;
