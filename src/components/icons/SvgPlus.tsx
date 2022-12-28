import React from "react";

type Props = {};

const SvgPlus = (props: Props) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="12"
        y1="6"
        x2="12"
        y2="18"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="6"
        y1="12"
        x2="18"
        y2="12"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default SvgPlus;
