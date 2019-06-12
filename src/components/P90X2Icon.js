import React from 'react';
import '../styles/icons.css';

const SVG = ({
  style = {},
  fill = "",
  width = "100%",
  className = "",
  // viewBox = "0 0 32 32"
  viewBox = "0 0 200 128"
}) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`.svgIcon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="p90x2" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
        <text id="P90X2" fontFamily="Nunito-Black, Nunito Black" fontSize="34" fontWeight="700" fill={fill}>
          <tspan x="46.212" y="116">P90X2</tspan>
        </text>
        <g id="Group" transform="translate(23.000000, 13.000000)" stroke="#3994C1">
          <path d="M31.6019417,30.5 C51.1419706,28.375 66.2741173,27.3125 76.9983819,27.3125 C87.7226464,27.3125 103.690823,28.375 124.902913,30.5" id="Line" strokeWidth="10" strokeLinecap="square"></path>
          <path d="M27.0873786,0.25 L27.0873786,60.75" id="Line-2" strokeWidth="14" strokeLinecap="round"></path>
          <path d="M127.912621,0.25 L127.912621,60.75" id="Line-3" strokeWidth="14" strokeLinecap="round"></path>
          <path d="M142.710356,11 L142.710356,51.5" id="Line-4" strokeWidth="11.5" strokeLinecap="round"></path>
          <path d="M12.289644,11 L12.289644,51.5" id="Line-4-Copy" strokeWidth="11.5" strokeLinecap="round"></path>
          <path d="M154.749191,18.125 L154.749191,42.875" id="Line-5" strokeWidth="9" strokeLinecap="round"></path>
          <path d="M0.250809061,18.125 L0.250809061,42.875" id="Line-5-Copy" strokeWidth="9" strokeLinecap="round"></path>
        </g>
      </g>
    </svg>
  );

export default SVG;