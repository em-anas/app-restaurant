import { StyledGrid } from "./styles";
import type { GridProps } from "./types";

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};
