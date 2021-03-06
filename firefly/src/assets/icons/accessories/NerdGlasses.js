import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 1024 1024"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svgIcon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="NerdGlasses">
      <rect id="Frame" fill="none" width="1024" height="1024" />
      <g
        id="Hipster-glasses-by-Rones"
        transform="translate(247.000000, 300.136437)"
      >
        <path
          id="path2998"
          d="M247.2,27.6c-8.2-0.4-16.9-2.4-25.8-7.8C200.1,7.1,146.4,0,130.4,0C85.3,0,40.9,1.6,0,8.4l1.4,33.1
			C13,46.1,16.6,54.7,18.2,65.1c7.4,48,17.7,88.9,37,105.6c13.7,11.9,30.8,22.3,63,21.2c34.2-1.1,70.6-11.3,88.4-33.6
			c15.7-19.6,32-49.7,37.9-82.6C246.7,63.4,254.8,58,264,58c9.2,0,17.3,5.5,19.6,17.9c5.9,32.9,22.2,63,37.9,82.6
			c17.8,22.3,54.2,32.5,88.4,33.6c32.1,1.1,49.3-9.3,63-21.2c19.2-16.8,29.6-57.6,37-105.6c1.6-10.4,5.2-19,16.8-23.7L528,8.4
			C487.1,1.6,442.7,0,397.6,0c-16,0-69.7,7.1-91,19.9c-8.9,5.3-17.5,7.4-25.8,7.8C269.6,28.2,258.4,28.2,247.2,27.6z M115.7,16.3
			c9.9,0,20,0.2,29.5,0.1c8.2-0.1,64.9-1.8,74.1,35c8.7,35.1-4.2,79.7-31.8,104.9C168.3,174,92.7,193,63,155.4
			c-20.3-25.8-24.6-49.3-26.8-81.7C34.8,53,39.7,32,70.7,21.4C83,17.1,99.2,16.4,115.7,16.3L115.7,16.3z M377.6,16.3
			c2.4,0,4.1,0.1,5.2,0.1c9.5,0.2,19.6-0.1,29.5-0.1c16.5,0,32.7,0.8,45,5c31,10.7,35.9,31.7,34.5,52.3
			c-2.2,32.5-6.5,55.9-26.8,81.7c-29.7,37.7-105.3,18.6-124.5,1c-27.6-25.2-40.5-69.8-31.8-104.9C316.7,19.2,361.1,16.4,377.6,16.3
			L377.6,16.3z M13.5,24.5H36V30H13.5V24.5z M492,24.5h22.5V30H492V24.5z"
        />
      </g>
    </g>
  </svg>
);

export default SVG;
