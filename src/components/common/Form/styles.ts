import styled, { css } from "styled-components";
import {
  getInputPadding,
  getInputFontSize,
  getInputBorder,
  getInputBackground,
} from "./utils";
import { Label as TypographyLabel } from "../Typography/index";
import type { StyledInputProps } from "./types";

export const inputBaseStyles = css<StyledInputProps>`
  padding: ${({ fieldSize }) => getInputPadding(fieldSize)};
  border-radius: var(--radius);
  border: ${({ variant, hasError, isSuccess }) =>
    getInputBorder(variant, hasError, isSuccess)};
  font-size: ${({ fieldSize }) => getInputFontSize(fieldSize)};
  font-family: var(--font-main);
  background: ${({ variant }) => getInputBackground(variant)};
  color: var(--color-secondary);
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: ${({ hasError }) =>
      hasError ? "var(--color-error)" : "var(--color-primary)"};
    border-bottom-color: ${({ hasError }) =>
      hasError ? "var(--color-error)" : "var(--color-primary)"};
    box-shadow: ${({ hasError, isSuccess }) =>
      hasError
        ? "0 0 0 1px var(--color-error)"
        : isSuccess
        ? "0 0 0 1px var(--color-success)"
        : "none"};
  }

  &::placeholder {
    color: var(--color-gray-500);
  }

  &:disabled {
    background: var(--color-gray-100);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FieldContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-md);
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

export const Label = styled(TypographyLabel)<{ hasError?: boolean }>`
  margin-bottom: var(--spacing-xs);
  color: ${({ hasError }) =>
    hasError ? "var(--color-error)" : "var(--color-secondary)"};
`;

export const StyledInput = styled.input<StyledInputProps>`
  ${inputBaseStyles}
`;

export const StyledTextarea = styled.textarea<StyledInputProps>`
  ${inputBaseStyles}
  min-height: 100px;
  resize: vertical;
`;

export const StyledSelect = styled.select<StyledInputProps>`
  ${inputBaseStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
  padding-right: 2rem;
`;

export const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: var(--font-size-small);
  margin-top: var(--spacing-xs);
`;

export const StatusIcon = styled.div<{ isSuccess?: boolean }>`
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%);
  color: ${({ isSuccess }) =>
    isSuccess ? "var(--color-success)" : "var(--color-error)"};
  font-size: var(--font-size-sm);

  ${Label} + & {
    top: calc(50% + var(--spacing-lg));
  }
`;

export const FormContainer = styled.form<{
  variant?: string;
  spacing?: string;
}>`
  background: ${({ variant }) =>
    variant === "boxed" ? "var(--color-white)" : "transparent"};
  box-shadow: ${({ variant }) =>
    variant === "boxed" ? "var(--shadow)" : "none"};
  border-radius: ${({ variant }) =>
    variant === "boxed" ? "var(--radius)" : "0"};
  padding: ${({ variant, spacing }) =>
    variant === "boxed" ? `var(--spacing-${spacing || "lg"})` : "0"};
  display: flex;
  flex-direction: column;
  gap: ${({ spacing }) => `var(--spacing-${spacing || "md"})`};
  width: 100%;
`;

export const ButtonContainer = styled.div<{ align?: string }>`
  display: flex;
  justify-content: ${({ align }) => {
    switch (align) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
        return "center";
      default:
        return "stretch";
    }
  }};
  margin-top: var(--spacing-md);
  width: ${({ align }) => (align === "stretch" ? "100%" : "auto")};

  & > button {
    width: ${({ align }) => (align === "stretch" ? "100%" : "auto")};
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
