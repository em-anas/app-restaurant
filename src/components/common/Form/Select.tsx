import React from "react";
import { FieldContainer, Label, StyledSelect, ErrorMessage } from "./styles";
import type { SelectProps } from "./types";

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  id,
  fullWidth = false,
  fieldSize = "md",
  variant = "outlined",
  children,
  ...props
}) => {
  return (
    <FieldContainer fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={id} hasError={!!error} weight="medium">
          {label}
        </Label>
      )}
      <StyledSelect
        id={id}
        hasError={!!error}
        fullWidth={fullWidth}
        fieldSize={fieldSize}
        variant={variant}
        {...props}
      >
        {children}
      </StyledSelect>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};
