export interface FormFieldProps {
  label?: string;
  error?: string;
  isSuccess?: boolean;
  showSuccessIndicator?: boolean;
  fullWidth?: boolean;
  fieldSize?: "sm" | "md" | "lg";
  variant?: "outlined" | "filled" | "standard";
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FormFieldProps {}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    FormFieldProps {}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    FormFieldProps {}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  buttonAlign?: "center" | "left" | "right" | "stretch";
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "boxed" | "plain";
}

export type StyledInputProps = {
  hasError?: boolean;
  isSuccess?: boolean;
  fullWidth?: boolean;
  fieldSize?: "sm" | "md" | "lg";
  variant?: "outlined" | "filled" | "standard";
};
