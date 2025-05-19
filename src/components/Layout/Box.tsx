import { StyledBox } from "./styles";
import type { BoxProps } from "./types";

export const Box: React.FC<BoxProps> = ({
  children,
  padding = "none",
  margin = "none",
  shadow = "none",
  radius = "none",
  border = false,
  background = "transparent",
  overflow = "visible",
  height,
  width,
}) => {
  return (
    <StyledBox
      padding={padding}
      margin={margin}
      shadow={shadow}
      radius={radius}
      border={border}
      background={background}
      overflow={overflow}
      height={height}
      width={width}
    >
      {children}
    </StyledBox>
  );
};
