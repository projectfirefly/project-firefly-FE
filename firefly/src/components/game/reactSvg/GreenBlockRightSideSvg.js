import React from "react";

const GreenBlockRightSideSvg = () => {
  return (
    <svg width="85px" height="76px" viewBox="0 0 85 76" version="1.1">
      <defs>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="56.3022823%"
          gradientTransform="translate(0.500000,0.500000),scale(0.883117,1.000000),rotate(90.000000),translate(-0.500000,-0.500000)"
          id="radialGradient-1"
        >
          <stop stop-color="#7CD147" offset="0%" />
          <stop stop-color="#4AA810" offset="100%" />
        </radialGradient>
        <path
          d="M66.0025475,3.82639828 L66.0025475,2.99687072 C72.7877608,10.7820361 77,21.6490033 77,33.6718388 C77,45.6946743 72.7877608,56.5616415 66.0025475,64.3468069 L66.0025475,64.1553281 C64.7448191,65.7687632 62.9822636,67.0121582 60.864419,67.6165428 C59.0741291,68.1274507 57.1767606,68.1284326 55.3859429,67.619378 C46.7496529,65.1644421 39.622877,63.9369741 34.0056153,63.9369741 C28.4138299,63.9369741 21.3261918,65.1533333 12.7427009,67.5860516 C7.42914138,69.0920066 1.90082991,66.005338 0.39487031,60.6917799 C-0.111490315,58.9051605 -0.110369046,57.0128361 0.398108491,55.226818 C2.80774487,46.7630142 4.01256306,39.6959219 4.01256306,34.0255411 C4.01256306,28.345017 2.80343061,21.26278 0.385165718,12.7788301 C-1.12876793,7.46753445 1.94960418,1.934594 7.26090036,0.420662245 C9.04854455,-0.0888878156 10.9428314,-0.0900902419 12.731121,0.417189942 C21.4194955,2.88180202 28.5109936,4.11410806 34.0056153,4.11410806 C39.5250386,4.11410806 46.6557869,2.87065213 55.3978602,0.383740251 C59.4208029,-0.760689344 63.5694919,0.728779572 66.0025475,3.82639828 Z"
          id="path-2"
        />
        <filter
          x="-9.1%"
          y="-7.4%"
          width="118.2%"
          height="120.6%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g
        id="Style-Guide"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="CodingBlocks" transform="translate(-292.000000, -1924.000000)">
          <g id="Group-22" transform="translate(150.000000, 1873.000000)">
            <g id="Group-5-Copy" transform="translate(146.000000, 53.000000)">
              <g id="GreenBlockRightSideEndState">
                <use fill="black" fill-opacity="1" filter="url(#filter-3)" />
                <use fill="url(#radialGradient-1)" fill-rule="evenodd" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default GreenBlockRightSideSvg;
