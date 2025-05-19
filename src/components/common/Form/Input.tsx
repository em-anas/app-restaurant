import React, { useState } from "react";
import {
  FieldContainer,
  Label,
  StyledInput,
  ErrorMessage,
  StatusIcon,
} from "./styles";
import type { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  isSuccess,
  showSuccessIndicator = true,
  fullWidth = false,
  fieldSize = "md",
  variant = "outlined",
  onBlur,
  onChange,
  ...props
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  const showError = touched && error;
  const showSuccess =
    touched && !error && isSuccess && showSuccessIndicator && props.value;

  return (
    <FieldContainer fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={id} hasError={!!showError} weight="medium">
          {label}
        </Label>
      )}
      <StyledInput
        id={id}
        hasError={!!showError}
        isSuccess={!!showSuccess}
        fullWidth={fullWidth}
        fieldSize={fieldSize}
        variant={variant}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      {showError && <ErrorMessage>{error}</ErrorMessage>}
      {(showSuccess || showError) && (
        <StatusIcon isSuccess={!!showSuccess}>
          {showSuccess ? "✓" : "✕"}
        </StatusIcon>
      )}
    </FieldContainer>
  );
};
