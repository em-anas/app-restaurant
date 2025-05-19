import styled, { css } from "styled-components";
import type { StyledCardProps } from "./types";
import {
  getCardAlignment,
  getCardPadding,
  getCardRadius,
  getCardShadow,
} from "./utils";

// Base card styles
const cardBase = css<StyledCardProps>`
  background: ${({ bgColor }) => bgColor || "var(--color-white)"};
  border-radius: ${({ radius }) => getCardRadius(radius)};
  padding: ${({ padding }) => getCardPadding(padding)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: ${({ shadow }) => getCardShadow(shadow)};
  border: 1px solid var(--color-gray-300);
  overflow: hidden;
  box-shadow: var(--shadow);

  ${({ align }) =>
    align &&
    css`
      align-items: ${getCardAlignment(align)};
    `}

  &:hover {
    background: ${({ bgColor }) => bgColor || "var(--color-primary)"};
  }
`;

// Base Card Component
export const CardContainer = styled.div<StyledCardProps>`
  ${cardBase}
`;
