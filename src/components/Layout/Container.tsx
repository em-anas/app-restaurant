import { StyledContainer } from "./styles";
import type { ContainerProps } from "./types";

export const Container: React.FC<ContainerProps> = ({
  children,
  fullWidth = false,
}) => {
  return <StyledContainer fullWidth={fullWidth}>{children}</StyledContainer>;
};
