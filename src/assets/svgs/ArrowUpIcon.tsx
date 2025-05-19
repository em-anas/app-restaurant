import React from "react";

export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  height = 18,
  width = 10,
  fill: fillColor = `var(--color-white)`,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 1V17M5 1L1 5M5 1L9 5"
      stroke={fillColor}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
