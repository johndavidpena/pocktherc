import React from 'react';
import '../styles/icons.css';

const SVG = ({
  style = {},
  fill = "",
  width = "100%",
  className = "",
  // viewBox = "0 0 32 32"
  viewBox = "0 0 400 400"
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
      <g id="barbell" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
        <g id="Group" transform="translate(46.500000, 139.000000)" stroke={fill}>
          <path d="M63,61 C101.953993,56.75 132.12066,54.625 153.5,54.625 C174.87934,54.625 206.712674,56.75 249,61" id="Line" strokeWidth="20" strokeLinecap="square"></path>
          <path d="M54,0.5 L54,121.5" id="Line-2" strokeWidth="28" strokeLinecap="round"></path>
          <path d="M255,0.5 L255,121.5" id="Line-3" strokeWidth="28" strokeLinecap="round"></path>
          <path d="M284.5,22 L284.5,103" id="Line-4" strokeWidth="23" strokeLinecap="round"></path>
          <path d="M24.5,22 L24.5,103" id="Line-4-Copy" strokeWidth="23" strokeLinecap="round"></path>
          <path d="M308.5,36.25 L308.5,85.75" id="Line-5" strokeWidth="18" strokeLinecap="round"></path>
          <path d="M0.5,36.25 L0.5,85.75" id="Line-5-Copy" strokeWidth="18" strokeLinecap="round"></path>
        </g>
      </g>
    </svg>
  );

export default SVG;