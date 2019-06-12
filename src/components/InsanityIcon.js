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
      <g id="insanity" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
        <text id="Insanity" fontFamily="Nunito-Black, Nunito Black" fontSize="34" fontWeight="700" fill={fill}>
          <tspan x="35.366" y="116">Insanity</tspan>
        </text>
        <g id="Group-Copy" transform="translate(94.000000, 38.000000) rotate(-45.000000) translate(-94.000000, -38.000000) translate(63.000000, 7.000000)" fill={fill}>
          <rect id="Rectangle" x="0" y="20.6666667" width="41.3333333" height="41.3333333"></rect>
          <circle id="Oval" cx="20.6666667" cy="20.6666667" r="20.6666667"></circle>
          <circle id="Oval-Copy" cx="41.3333333" cy="41.3333333" r="20.6666667"></circle>
        </g>
      </g>
    </svg>
  );

export default SVG;