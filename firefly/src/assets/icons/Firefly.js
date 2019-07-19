import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 1024 1024",
  mouthStroke = "#3E8C0B",
  pupilFill = "#17191C",
  eyeFill = "#FFFFFF",
  headFill = "#4AA810",
  headStroke = "#4AA810",
  shineStroke = "#FBE66A",
  antennaStroke = "#17191C",
  lighttopFill = "#DFC104",
  lightmidFill = "#F9DC28",
  lightbottomFill = "#FBE66A",
  bodyBoth = "#3E8C0B",
  wingLittleBoth = "#E3E5E8",
  wingBigBoth = "#C7CBD1"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMinYMin"
  >
    <g id="wings-left" transform="translate(162.000000, 411.000000)">
      <path
        id="wing-left-big"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={wingBigBoth}
        stroke={wingBigBoth}
        strokeWidth="15"
        d="
		M38.9,64.8C83.7,39.3,140.1,37.9,187,66c46.4,27.9,71.6,77.6,70.6,128.6c-44.8,25.5-101.2,27-148.1-1.2
		C63.1,165.6,37.9,115.8,38.9,64.8z"
      />
      <path
        id="wing-left-little"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={wingLittleBoth}
        stroke={wingLittleBoth}
        strokeWidth="15"
        d="
		M97.6,256.8c6.6-32.7,29.6-61.1,63.1-72.6c34.4-11.9,71.1-2.9,96.5,20.2c-6.6,32.7-29.6,61.1-63.1,72.6
		C159.7,288.9,123,280,97.6,256.8z"
      />
    </g>
    <g id="wings-right" transform="translate(566.000000, 411.000000)">
      <path
        id="wing-right-big"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={wingBigBoth}
        stroke={wingBigBoth}
        strokeWidth="15"
        d="
		M260.2,67.3c-45.7-26.8-103-28.9-150.2-0.6c-46.7,28.1-71.7,78.9-70.1,131.3c45.7,26.8,103,28.9,150.2,0.6
		C236.8,170.6,261.8,119.7,260.2,67.3z"
      />
      <path
        id="wing-right-little"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={wingLittleBoth}
        stroke={wingLittleBoth}
        strokeWidth="15"
        d="
		M200.3,255.4c-6.4-33.7-29.4-62.8-63.2-74.4c-34.7-11.9-71.8-2.4-97.7,21.7c6.4,33.7,29.4,62.8,63.2,74.4
		C137.3,289,174.4,279.4,200.3,255.4z"
      />
    </g>
    <path
      id="body-behind"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={bodyBoth}
      stroke={bodyBoth}
      strokeWidth="15"
      d="M438.9,571.4
	c19.8,8.8,46.2,13.6,72.6,13.6c27,0,54-5,73.9-14.2c23,18.3,37.6,45.2,37.6,75.1c0,55.2-50,80-111,80s-110-24.8-110-80
	C402,616.3,416.2,589.7,438.9,571.4z"
    />
    <path
      id="body-light-bottom"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={lightbottomFill}
      d="M630.2,636.9c0.5,4.1,0.8,8.3,0.8,12.5
	c0,59.7-53.6,86.6-119.1,86.6S394,709.1,394,649.4c0-5.9,0.5-11.7,1.5-17.3c33.6,23.4,77.3,35.9,121,35.9
	C557.1,668,597.7,657.2,630.2,636.9z"
    />
    <path
      id="body-light-mid"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={lightmidFill}
      d="M625.7,677.6c-32.7,16.6-72.2,25.5-111.6,25.5
	c-41.1,0-82.1-9.6-115.5-27.5c-2.9-8.2-4.5-17.4-4.5-27.4c0-5.6,0.5-11.1,1.4-16.5c33.4,22.5,76.7,34.6,120,34.6
	c41,0,82.1-10.9,114.7-31.2c0.6,4.3,0.9,8.6,0.9,13C631,659,629.1,668.9,625.7,677.6z"
    />
    <path
      id="body-light-top"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={lighttopFill}
      d="M631,642.1c-33.7,16.8-75.3,25.8-117,25.8
	c-42.9,0-85.8-9.5-120-27.3c0.2-12.7,3.6-24.9,9.6-35.9c32.1,16.8,72,25.8,111.8,25.8c37.9,0,75.9-8.2,107.2-23.5
	c5.4,10.7,8.4,22.3,8.4,34.5C631,641.7,631,641.9,631,642.1z"
    />
    <path
      id="antenna-left"
      fill="none"
      stroke={antennaStroke}
      strokeWidth="15"
      strokeLinecap="round"
      d="M477.3,304.9
	c-7.8-26.3-21.6-49.5-41.4-69.7c-19.8-20.1-42.3-27.2-67.5-21.2"
    />
    <path
      id="antenna-right"
      fill="none"
      stroke={antennaStroke}
      strokeWidth="15"
      strokeLinecap="round"
      d="M556,304.9
	c7.9-26.3,21.9-49.5,42-69.6c20.1-20.1,43.1-27.1,68.9-21.1"
    />
    <path
      id="shine-left"
      fill="none"
      stroke={shineStroke}
      strokeWidth="15"
      strokeLinecap="round"
      d="M419.7,751.3l-35.2,27"
    />
    <path
      id="shine-mid"
      fill="none"
      stroke={shineStroke}
      strokeWidth="15"
      strokeLinecap="round"
      d="M512.4,778.4v45.2"
    />
    <path
      id="shine-right"
      fill="none"
      stroke={shineStroke}
      strokeWidth="15"
      strokeLinecap="round"
      d="M605.5,752.2l34.7,26.2"
    />
    <path
      id="head"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={headFill}
      stroke={headStroke}
      strokeWidth="15"
      d="M512.5,576
	c77.2,0,154.5-50,154.5-135.4S597.8,286,512.5,286S358,355.2,358,440.6S435.2,576,512.5,576z"
    />
    <g id="left-eye" transform="translate(374.000000, 364.000000)">
      <circle
        id="left-eye-white"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={eyeFill}
        cx="64"
        cy="64"
        r="64"
      />
      <path
        id="left-eye-pupil"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={pupilFill}
        d="M64.6,103c21.2,0,38.4-17.9,38.4-40
		s-17.3-41.6-38.4-40c-19.7,1.5-25,9-16,22.4C35.4,38.6,28,44.4,26.2,63C24,85,43.4,103,64.6,103z"
      />
    </g>
    <g id="right-eye" transform="translate(523.000000, 364.000000)">
      <circle
        id="right-eye-white"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={eyeFill}
        cx="64"
        cy="64"
        r="64"
      />
      <path
        id="right-eye-pupil"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={pupilFill}
        d="M64.2,103.5c21.3,0,38.7-17.9,38.7-40.1
		S85.4,21.7,64.2,23.4c-19.8,1.5-25.2,9-16.1,22.4c-13.3-6.9-20.8-1-22.6,17.6C23.4,85.5,42.8,103.5,64.2,103.5z"
      />
    </g>
    <path
      id="mouth"
      fill="none"
      stroke={mouthStroke}
      strokeWidth="15"
      strokeLinecap="round"
      d="M482,523c9.8,6.9,19.9,10.3,30.1,10.3
	c10.2,0,20.8-3.4,31.8-10.3"
    />
  </svg>
);

export default SVG;
