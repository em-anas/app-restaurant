import React from "react";
import { FormContainer, ButtonContainer } from "./styles";
import type { FormProps } from "./types";

export const Form: React.FC<FormProps> = ({
  children,
  buttonAlign = "stretch",
  spacing = "md",
  variant = "plain",
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length === 0) {
    return (
      <FormContainer spacing={spacing} variant={variant} {...props}>
        {children}
      </FormContainer>
    );
  }

  const lastChild = childrenArray[childrenArray.length - 1]; // Assuming the last child is the button
  const otherChildren = childrenArray.slice(0, -1);

  return (
    <FormContainer spacing={spacing} variant={variant} {...props}>
      {otherChildren}
      <ButtonContainer align={buttonAlign}>{lastChild}</ButtonContainer>
    </FormContainer>
  );
};
