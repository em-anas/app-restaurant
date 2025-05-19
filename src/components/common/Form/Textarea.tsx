import React from "react";
import { FieldContainer, Label, StyledTextarea, ErrorMessage } from "./styles";
import type { TextareaProps } from "./types";

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  id,
  fullWidth = false,
  fieldSize = "md",
  variant = "outlined",
  ...props
}) => {
  return (
    <FieldContainer fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={id} hasError={!!error} weight="medium">
          {label}
        </Label>
      )}
      <StyledTextarea
        id={id}
        hasError={!!error}
        fullWidth={fullWidth}
        fieldSize={fieldSize}
        variant={variant}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};
