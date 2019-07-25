import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 24 42"
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
    <g id="HF-Design">
      <g
        id="CustomizeFireflyPage"
        transform="translate(-1005.000000, -406.000000)"
      >
        <g id="Accessories" transform="translate(611.000000, 366.000000)">
          <path
            id="RightArrow"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#7CD147"
            stroke="#4AA810"
            stroke-width="3"
            stroke-linejoin="round"
            d="
				M400.8,60.9l-7-23.2L417.1,61l-23.3,23.3L400.8,60.9z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
