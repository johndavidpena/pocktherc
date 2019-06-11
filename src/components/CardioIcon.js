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
      <g id="cardio" stroke="none" stroke-width="1" fill={fill} fill-rule="evenodd">
        <g id="Group" transform="translate(200.500000, 172.500000) rotate(-45.000000) translate(-200.500000, -172.500000) translate(98.000000, 70.000000)" fill={fill}>
          <rect id="Rectangle" x="0" y="68.3333333" width="136.666667" height="136.666667"></rect>
          <circle id="Oval" cx="68.3333333" cy="68.3333333" r="68.3333333"></circle>
          <circle id="Oval-Copy" cx="136.666667" cy="136.666667" r="68.3333333"></circle>
        </g>
      </g>
    </svg>
  );

export default SVG;