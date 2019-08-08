import React from "react";
import Lottie from "react-lottie";
import animationData from "./ffAnim.json";
import styled from "styled-components";

const StyledLottie = styled.div`
  /* .lambdahat, */
  .sunglasses,
  .headphones,
  .nerdglasses {
    display: none !important;
  }
`;

const FFanim = ({ height, width, color, accessory }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <StyledLottie accessory={accessory} color={color}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </StyledLottie>
  );
};

export default FFanim;
