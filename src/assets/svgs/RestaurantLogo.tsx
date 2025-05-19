import React from "react";

const RestaurantLogo: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 48,
  height = 48,
  fill: fillColor = "var(--color-primary",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="8"
      y="20"
      width="32"
      height="20"
      rx="3"
      fill={fillColor}
      stroke={fillColor}
      strokeWidth="2"
    />
    <rect
      x="18"
      y="28"
      width="4"
      height="8"
      rx="1"
      fill="var(--color-primary)"
    />
    <rect
      x="26"
      y="28"
      width="4"
      height="8"
      rx="1"
      fill="var(--color-primary)"
    />
    <rect x="14" y="20" width="20" height="-8" rx="2" fill={fillColor} />
    <path
      d="M12 20 L24 8 L36 20 Z"
      fill={fillColor}
      stroke={fillColor}
      strokeWidth="2"
    />
    <rect
      x="10"
      y="24"
      width="2"
      height="8"
      rx="1"
      fill="var(--color-primary)"
    />
    <rect
      x="36"
      y="24"
      width="2"
      height="8"
      rx="1"
      fill="var(--color-primary)"
    />
    <path
      d="M20 16 L20 12 M28 16 L28 12"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="16"
      y="12"
      width="2"
      height="6"
      rx="1"
      fill="var(--color-primary)"
    />
    <rect
      x="30"
      y="12"
      width="2"
      height="6"
      rx="1"
      fill="var(--color-primary)"
    />
  </svg>
);

export default RestaurantLogo;
