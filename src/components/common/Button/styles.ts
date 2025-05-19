import styled, { css } from "styled-components";
import type { StyledButtonProps } from "./types";

const buttonBase = css`
  font-family: var(--font-main);
  cursor: pointer;
  border: none;
  outline: none;
  transition: var(--transition);
`;

const sizeStyles = {
  xsmall: css`
    font-size: var(--font-size-small);
    padding: var(--spacing-xs) var(--spacing-sm);
    height: 32px;
  `,
  small: css`
    font-size: var(--font-size-small);
    padding: var(--spacing-sm) var(--spacing-md);
    height: 40px;
  `,
  medium: css`
    font-size: var(--font-size-medium);
    padding: var(--spacing-sm) var(--spacing-lg);
    height: 48px;
  `,
  large: css`
    font-size: var(--font-size-large);
    padding: var(--spacing-md) var(--spacing-xl);
    height: 56px;
  `,
};

const shapeStyles = {
  rectangle: css`
    border-radius: var(--radius);
  `,
  rounded: css`
    border-radius: 20px;
  `,
  circle: css`
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  pill: css`
    border-radius: 999px;
  `,
};

const variantStyles = {
  primary: css`
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--shadow);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-md);
    text-align: center;
    &:hover,
    &:active {
      background: var(--color-secondary);
      color: var(--color-primary);
    }
  `,
  secondary: css`
    background: var(--color-secondary);
    color: var(--color-primary);
    box-shadow: var(--shadow);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-md);
    text-align: center;
    &:hover,
    &:active {
      background: var(--color-primary);
      color: var(--color-white);
    }
  `,
  nav: css`
    background: var(--color-primary);
    color: var(--color-secondary);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    &:hover {
      background: var(--color-white);
      color: var(--color-secondary);
    }
  `,
  transparent: css`
    background: var(--color-transparent);
    color: var(--color-secondary);
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `,
  outline: css`
    background: var(--color-transparent);
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    &:hover {
      background: var(--color-secondary);
      color: var(--color-white);
    }
  `,
  outlinePrimary: css`
    background: var(--color-transparent);
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    &:hover {
      background: var(--color-primary);
      color: var(--color-white);
    }
  `,
  link: css`
    background: var(--color-transparent);
    color: var(--color-white);
    padding: 0;
    height: auto;
    box-shadow: none;

    &:active {
      background: var(--color-transparent);
    }
  `,
  tab: css`
    background: var(--color-transparent);
    color: var(--color-secondary);
    font-weight: var(--font-weight-bold);
    padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-sm)
      var(--spacing-sm);
    border-bottom: 2px solid var(--color-transparent);
    box-shadow: none;
    &:hover {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
    }
  `,
};

const layoutStyles = {
  flex: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexStart: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  flexEnd: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBase}
  ${({ size = "medium" }) => sizeStyles[size]}
  ${({ variant = "primary" }) => variantStyles[variant]}
  ${({ shape = "rectangle" }) => shapeStyles[shape]}
  ${({ layout }) => layout && layoutStyles[layout]}
  
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ active, variant }) =>
    active &&
    variant === "tab" &&
    css`
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
      svg {
        fill: var(--color-primary);
      }
    `}

  ${({ active, variant }) =>
    active &&
    variant === "transparent" &&
    css`
      color: var(--color-primary);
    `}

     ${({ active, variant }) =>
    active &&
    variant === "link" &&
    css`
      color: var(--color-primary);
    `}
    
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const StyledHamburgerButton = styled(StyledButton)<{ isOpen?: boolean }>`
  span {
    display: block;
    width: 30px;
    height: 4px;
    background-color: ${({ variant }) =>
      variant === "primary" ? "var(--color-white)" : "var(--color-primary)"};
    margin: var(--spacing-xs) 0;
    transition: var(--transition);
    border-radius: calc(var(--radius) / 4);

    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(5px, 10px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }

    &:last-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(5px, -10px)" : "none"};
    }
  }
`;

export const StyledClearButton = styled(StyledButton)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  font-size: var(--font-size-large);
  line-height: 1;
  padding: 0;
  width: 24px;
  height: 24px;
`;

export const StyledMenuTab = styled(StyledButton)`
  gap: var(--spacing-sm);
  min-width: 120px;

  svg {
    width: 32px;
    height: 32px;
    fill: ${({ active }) =>
      active ? "var(--color-secondary)" : "var(--color-secondary)"};
    transition: var(--transition);
  }

  .tab-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: var(--spacing-sm);

    strong {
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-bold);
      color: var(--color-secondary);
      line-height: 19px;

      &:hover {
        color: var(--color-primary);
        line-height: 16px;
      }
    }
  }
`;
