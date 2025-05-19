import React from "react";
import { CardContainer } from "./styles";
import type { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  variant = "default",
  padding,
  fullWidth = false,
  align,
  shadow = "md",
  radius = "md",
  bgColor,
  children,
  ...props
}) => (
  <CardContainer
    variant={variant}
    padding={padding}
    fullWidth={fullWidth}
    align={align}
    shadow={shadow}
    radius={radius}
    bgColor={bgColor}
    {...props}
  >
    {children}
  </CardContainer>
);
