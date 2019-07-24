import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
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
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect id="Frame" fill="none" width="1024" height="1024" />
    <path
      id="LeftBigWing"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={wingBigBoth}
      stroke={wingBigBoth}
      strokeWidth="22.5"
      d="
	M44.4,457.2c67.2-38.3,151.9-40.5,222.2,1.8c69.6,41.8,107.4,116.5,105.9,193c-67.2,38.3-151.9,40.5-222.2-1.8
	C80.8,608.4,42.9,533.7,44.4,457.2z"
    />
    <path
      id="LeftSmallWing"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={wingLittleBoth}
      stroke={wingLittleBoth}
      strokeWidth="22.5"
      d="
	M132.4,745.4c9.9-49.1,44.4-91.7,94.7-109c51.7-17.8,106.7-4.4,144.9,30.3c-9.9,49.1-44.4,91.7-94.7,109
	C225.6,793.5,170.6,780.1,132.4,745.4z"
    />
    <path
      id="RightBigWing"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={wingBigBoth}
      stroke={wingBigBoth}
      strokeWidth="22.5"
      d="
	M982.8,461c-68.6-40.2-154.6-43.4-225.4-0.8c-70.1,42.1-107.6,118.4-105.2,197c68.6,40.2,154.6,43.4,225.4,0.8
	C947.7,615.9,985.2,539.6,982.8,461z"
    />
    <path
      id="RightSmallWing"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={wingLittleBoth}
      stroke={wingLittleBoth}
      strokeWidth="22.5"
      d="
	M892.8,743.2c-9.6-50.6-44.1-94.2-94.8-111.7c-52.1-17.9-107.8-3.6-146.6,32.5c9.6,50.6,44.1,94.2,94.8,111.7
	C798.3,793.6,854,779.3,892.8,743.2z"
    />
    <path
      id="Body"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={bodyBoth}
      stroke={bodyBoth}
      strokeWidth="22.5"
      d="M401.5,600.7
	c29.7,13.2,69.4,20.4,109,20.4c40.5,0,81-7.5,110.9-21.2c34.6,27.5,56.4,67.8,56.4,112.7c0,82.8-75,120.1-166.6,120.1
	s-165-37.3-165-120.1C346.2,668.1,367.5,628.1,401.5,600.7z"
    />
    <path
      id="BodyLightBottom"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={lightbottomFill}
      d="M688.7,698.9c0.8,6.2,1.2,12.4,1.2,18.8
	c0,89.6-80.5,130-178.7,130s-177-40.3-177-130c0-8.8,0.8-17.5,2.3-26c50.4,35,116,53.9,181.6,53.9
	C579,745.6,639.9,729.3,688.7,698.9z"
    />
    <path
      id="BodyLightMid"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={lightmidFill}
      d="M681.8,760c-49,25-108.3,38.2-167.5,38.2
	c-61.6,0-123.3-14.4-173.4-41.3c-4.4-12.3-6.7-26-6.7-41.2c0-8.4,0.7-16.7,2.1-24.7c50.1,33.8,115.1,52,180.1,52
	c61.6,0,123.1-16.3,172.1-46.8c0.9,6.4,1.3,12.9,1.3,19.6C689.8,732.2,687,746.9,681.8,760z"
    />
    <path
      id="BodyLightTop"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={lighttopFill}
      d="M689.8,706.8c-50.5,25.2-113,38.7-175.5,38.7
	c-64.4,0-128.8-14.3-180.1-41c0.2-19.1,5.4-37.3,14.5-53.9c48.2,25.2,108,38.7,167.8,38.7c56.9,0,113.9-12.2,160.8-35.2
	c8.1,16,12.6,33.5,12.6,51.7C689.8,706.2,689.8,706.5,689.8,706.8z"
    />
    <path
      id="LeftAntenna"
      fill="none"
      stroke={antennaStroke}
      strokeWidth="22.5"
      strokeLinecap="round"
      d="M459.2,200.6
	c-11.7-39.5-32.4-74.3-62.1-104.6s-63.5-40.9-101.4-31.9"
    />
    <path
      id="RightAntenna"
      fill="none"
      stroke={antennaStroke}
      strokeWidth="22.5"
      strokeLinecap="round"
      d="M577.4,200.6
	c11.8-39.5,32.9-74.3,63.1-104.4s64.7-40.7,103.3-31.6"
    />
    <path
      id="LightLeft"
      fill="none"
      stroke={shineStroke}
      strokeWidth="22.5"
      strokeLinecap="round"
      d="M372.8,870.6l-52.9,40.5"
    />
    <path
      id="LightMiddle"
      fill="none"
      stroke={shineStroke}
      strokeWidth="22.5"
      strokeLinecap="round"
      d="M511.8,911.3v67.9"
    />
    <path
      id="LightRight"
      fill="none"
      stroke={shineStroke}
      strokeWidth="22.5"
      strokeLinecap="round"
      d="M651.6,871.9l52.1,39.3"
    />
    <path
      id="Head"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={headFill}
      stroke={headStroke}
      strokeWidth="22.5"
      d="M512,607.5
	c115.9,0,231.9-75.1,231.9-203.2s-103.8-232-231.9-232s-231.9,103.9-231.9,232S396.1,607.5,512,607.5z"
    />
    <ellipse
      id="LeftEye"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={eyeFill}
      cx="400.2"
      cy="385.4"
      rx="96"
      ry="96.1"
    />
    <path
      id="LeftPupil"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={pupilFill}
      d="M401.1,443.9c31.8,0,57.7-26.8,57.7-60
	s-25.9-62.4-57.7-60c-29.6,2.3-37.5,13.5-24,33.6c-19.8-10.3-31-1.5-33.7,26.4C340.2,416.9,369.2,443.9,401.1,443.9z"
    />
    <ellipse
      id="RightEye"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={eyeFill}
      cx="623.8"
      cy="385.4"
      rx="96"
      ry="96.1"
    />
    <path
      id="RightPupil"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={pupilFill}
      d="M624,444.7c32,0,58-26.9,58-60.2
	S656,322,624,324.4c-29.7,2.3-37.8,13.5-24.1,33.7c-19.9-10.4-31.2-1.5-33.9,26.5C562.8,417.6,592,444.7,624,444.7z"
    />
    <path
      id="Smile"
      fill="none"
      stroke={mouthStroke}
      strokeWidth="22.5"
      strokeLinecap="round"
      d="M466.2,528
	c14.8,10.3,29.8,15.4,45.1,15.4c15.3,0,31.2-5.1,47.7-15.4"
    />
  </svg>
);

export default SVG;
