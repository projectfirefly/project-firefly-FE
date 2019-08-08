import React from "react";
import Lottie from "react-lottie";
import animationData from "./ffAnim.json";
import styled from "styled-components";

const StyledLottie = styled.div.attrs(props => ({}))`
  .lambdahat {
    ${props =>
      props.accessory === "lambdahat"
        ? "display: block !important;"
        : "display: none !important;"}
  }
  .sunglasses {
    ${props =>
      props.accessory === "sunglasses"
        ? "display: block !important;"
        : "display: none !important;"}
  }
  .headphones {
    ${props =>
      props.accessory === "headphones"
        ? "display: block !important;"
        : "display: none !important;"}
  }
  .nerdglasses {
    ${props =>
      props.accessory === "nerdglasses"
        ? "display: block !important;"
        : "display: none !important;"}
  }
  .bodyLightTop path {
    fill: hsl(${props => props.color}, 100%, 30%);
  }
  .bodyLightMid path {
    fill: hsl(${props => props.color}, 100%, 40%);
  }
  .bodyLightBottom path {
    fill: hsl(${props => props.color}, 100%, 55%);
  }
  .lightL path,
  .lightM path,
  .lightR path {
    stroke: hsl(${props => props.color}, 100%, 55%);
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
