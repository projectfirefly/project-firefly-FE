import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 528 192.1"
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
    <g
      id="Hipster-glasses-by-Rones"
      transform="translate(247.000000, 300.136437)"
    >
      <path
        id="path2998"
        d="M0.2-272.5c-8.2-0.4-16.9-2.4-25.8-7.8c-21.3-12.8-75-19.9-91-19.9c-45.1,0-89.5,1.6-130.4,8.4l1.4,33.1
		c11.7,4.6,15.2,13.3,16.8,23.7c7.4,48,17.7,88.9,37,105.6c13.7,11.9,30.8,22.3,63,21.2c34.2-1.1,70.6-11.3,88.4-33.6
		c15.7-19.6,32-49.7,37.9-82.6c2.2-12.4,10.3-17.9,19.6-17.9c9.2,0,17.3,5.5,19.6,17.9c5.9,32.9,22.2,63,37.9,82.6
		c17.8,22.3,54.2,32.5,88.4,33.6c32.1,1.1,49.3-9.3,63-21.2c19.2-16.8,29.6-57.6,37-105.6c1.6-10.4,5.2-19,16.8-23.7l1.4-33.1
		c-40.9-6.8-85.3-8.4-130.4-8.4c-16,0-69.7,7.1-91,19.9c-8.9,5.3-17.5,7.4-25.8,7.8C22.6-272,11.4-272,0.2-272.5z M-131.3-283.8
		c9.9,0,20,0.2,29.5,0.1c8.2-0.1,64.9-1.8,74.1,35c8.7,35.1-4.2,79.7-31.8,104.9c-19.2,17.6-94.8,36.6-124.5-1
		c-20.3-25.8-24.6-49.3-26.8-81.7c-1.4-20.6,3.5-41.6,34.5-52.3C-164-283-147.8-283.8-131.3-283.8L-131.3-283.8z M130.6-283.8
		c2.4,0,4.1,0.1,5.2,0.1c9.5,0.2,19.6-0.1,29.5-0.1c16.5,0,32.7,0.8,45,5c31,10.7,35.9,31.7,34.5,52.3c-2.2,32.5-6.5,55.9-26.8,81.7
		c-29.7,37.7-105.3,18.6-124.5,1C65.9-169,53-213.6,61.7-248.7C69.7-280.9,114.1-283.7,130.6-283.8L130.6-283.8z M-233.5-275.6h22.5
		v5.4h-22.5V-275.6z M245-275.6h22.5v5.4H245V-275.6z"
      />
    </g>
  </svg>
);

export default SVG;
