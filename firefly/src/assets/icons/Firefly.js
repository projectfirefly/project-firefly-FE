import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 1024 1024"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {/* <style type="text/css">
      .st0
      {
        "{fill-rule:evenodd;clip-rule:evenodd;fill:#C7CBD1;stroke:#C7CBD1;stroke-width:15;}"
      }
      .st1
      {
        "{fill-rule:evenodd;clip-rule:evenodd;fill:#E3E5E8;stroke:#E3E5E8;stroke-width:15;}"
      }
      .st2
      {
        "{fill-rule:evenodd;clip-rule:evenodd;fill:#3E8C0B;stroke:#3E8C0B;stroke-width:15;}"
      }
      .st3{"{fill-rule:evenodd;clip-rule:evenodd;fill:#FBE66A;}"}
      .st4{"{fill-rule:evenodd;clip-rule:evenodd;fill:#F9DC28;}"}
      .st5{"{fill-rule:evenodd;clip-rule:evenodd;fill:#DFC104;}"}
      .st6{"{fill:none;stroke:#17191C;stroke-width:15;stroke-linecap:round;}"}
      .st7{"{fill:none;stroke:#FBE66A;stroke-width:15;stroke-linecap:round;}"}
      .st8
      {
        "{fill-rule:evenodd;clip-rule:evenodd;fill:#4AA810;stroke:#4AA810;stroke-width:15;}"
      }
      .st9{"{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}"}
      .st10{"{fill-rule:evenodd;clip-rule:evenodd;fill:#17191C;}"}
      .st11{"{fill:none;stroke:#3E8C0B;stroke-width:15;stroke-linecap:round;}"}
    </style> */}
    <g id="wings-left" transform="translate(162.000000, 411.000000)">
      <path
        id="wing-left-big"
        class="st0"
        fill="#C7CBD1"
        d="M38.9,64.8C83.7,39.3,140.1,37.9,187,66c46.4,27.9,71.6,77.6,70.6,128.6
		c-44.8,25.5-101.2,27-148.1-1.2C63.1,165.6,37.9,115.8,38.9,64.8z"
      />
      <path
        id="wing-left-little"
        class="st1"
        fill="#C7CBD1"
        d="M97.6,256.8c6.6-32.7,29.6-61.1,63.1-72.6c34.4-11.9,71.1-2.9,96.5,20.2
		c-6.6,32.7-29.6,61.1-63.1,72.6C159.7,288.9,123,280,97.6,256.8z"
      />
    </g>
    <g id="wings-right" transform="translate(566.000000, 411.000000)">
      <path
        id="wing-right-big"
        class="st0"
        fill="#C7CBD1"
        d="M260.2,67.3c-45.7-26.8-103-28.9-150.2-0.6c-46.7,28.1-71.7,78.9-70.1,131.3
		c45.7,26.8,103,28.9,150.2,0.6C236.8,170.6,261.8,119.7,260.2,67.3z"
      />
      <path
        id="wing-right-little"
        class="st1"
        fill="#C7CBD1"
        d="M200.3,255.4c-6.4-33.7-29.4-62.8-63.2-74.4c-34.7-11.9-71.8-2.4-97.7,21.7
		c6.4,33.7,29.4,62.8,63.2,74.4C137.3,289,174.4,279.4,200.3,255.4z"
      />
    </g>
    <path
      id="body-behind"
      class="st2"
      fill="#C7CBD1"
      d="M438.9,571.4c19.8,8.8,46.2,13.6,72.6,13.6c27,0,54-5,73.9-14.2c23,18.3,37.6,45.2,37.6,75.1
	c0,55.2-50,80-111,80s-110-24.8-110-80C402,616.3,416.2,589.7,438.9,571.4z"
    />
    <path
      id="body-light-bottom"
      class="st3"
      fill="#C7CBD1"
      d="M630.2,636.9c0.5,4.1,0.8,8.3,0.8,12.5c0,59.7-53.6,86.6-119.1,86.6
	S394,709.1,394,649.4c0-5.9,0.5-11.7,1.5-17.3c33.6,23.4,77.3,35.9,121,35.9C557.1,668,597.7,657.2,630.2,636.9z"
    />
    <path
      id="body-light-mid"
      class="st4"
      fill="#C7CBD1"
      d="M625.7,677.6c-32.7,16.6-72.2,25.5-111.6,25.5c-41.1,0-82.1-9.6-115.5-27.5
	c-2.9-8.2-4.5-17.4-4.5-27.4c0-5.6,0.5-11.1,1.4-16.5c33.4,22.5,76.7,34.6,120,34.6c41,0,82.1-10.9,114.7-31.2
	c0.6,4.3,0.9,8.6,0.9,13C631,659,629.1,668.9,625.7,677.6z"
    />
    <path
      id="body-light-top"
      class="st5"
      fill="#C7CBD1"
      d="M631,642.1c-33.7,16.8-75.3,25.8-117,25.8c-42.9,0-85.8-9.5-120-27.3
	c0.2-12.7,3.6-24.9,9.6-35.9c32.1,16.8,72,25.8,111.8,25.8c37.9,0,75.9-8.2,107.2-23.5c5.4,10.7,8.4,22.3,8.4,34.5
	C631,641.7,631,641.9,631,642.1z"
    />
    <path
      id="antenna-left"
      class="st6"
      fill="#C7CBD1"
      d="M477.3,304.9c-7.8-26.3-21.6-49.5-41.4-69.7c-19.8-20.1-42.3-27.2-67.5-21.2"
    />
    <path
      id="antenna-right"
      class="st6"
      fill="#C7CBD1"
      d="M556,304.9c7.9-26.3,21.9-49.5,42-69.6c20.1-20.1,43.1-27.1,68.9-21.1"
    />
    <path id="shine-left" class="st7" d="M419.7,751.3l-35.2,27" />
    <path id="shine-mid" class="st7" d="M512.4,778.4v45.2" />
    <path id="shine-right" class="st7" d="M605.5,752.2l34.7,26.2" />
    <path
      id="head"
      class="st8"
      fill="#C7CBD1"
      d="M512.5,576c77.2,0,154.5-50,154.5-135.4S597.8,286,512.5,286S358,355.2,358,440.6
	S435.2,576,512.5,576z"
    />
    <g id="left-eye" transform="translate(374.000000, 364.000000)">
      <circle id="left-eye-white" class="st9" cx="64" cy="64" r="64" />
      <path
        id="left-eye-pupil"
        class="st10"
        d="M64.6,103c21.2,0,38.4-17.9,38.4-40s-17.3-41.6-38.4-40c-19.7,1.5-25,9-16,22.4
		C35.4,38.6,28,44.4,26.2,63C24,85,43.4,103,64.6,103z"
      />
    </g>
    <g id="right-eye" transform="translate(523.000000, 364.000000)">
      <circle id="right-eye-white" class="st9" cx="64" cy="64" r="64" />
      <path
        id="right-eye-pupil"
        class="st10"
        d="M64.2,103.5c21.3,0,38.7-17.9,38.7-40.1S85.4,21.7,64.2,23.4
		c-19.8,1.5-25.2,9-16.1,22.4c-13.3-6.9-20.8-1-22.6,17.6C23.4,85.5,42.8,103.5,64.2,103.5z"
      />
    </g>
    <path
      id="mouth"
      class="st11"
      d="M482,523c9.8,6.9,19.9,10.3,30.1,10.3c10.2,0,20.8-3.4,31.8-10.3"
    />
  </svg>
);

export default SVG;
