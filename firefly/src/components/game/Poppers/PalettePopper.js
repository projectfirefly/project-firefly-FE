import React from "react";
import ColorSlider from "./../../ColorSlider/ColorSlider";

const PalettePopper = ({ color, setColor }) => {
  return <ColorSlider value={color} updateColor={setColor} />;
};

export default PalettePopper;
