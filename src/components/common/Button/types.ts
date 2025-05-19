export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  layout?: ButtonLayout;
  fullWidth?: boolean;
  active?: boolean;
  isOpen?: boolean;
  children?: React.ReactNode;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "nav"
  | "transparent"
  | "outline"
  | "outlinePrimary"
  | "link"
  | "tab";

export type ButtonSize = "xsmall" | "small" | "medium" | "large";

export type ButtonShape = "rectangle" | "rounded" | "circle" | "pill";

export type ButtonLayout =
  | "flex"
  | "flexColumn"
  | "flexStart"
  | "flexEnd"
  | "flexBetween";

export interface IconButtonProps
  extends Omit<ButtonProps, "shape" | "children"> {
  icon: React.ReactNode;
  label?: string;
}

export interface HamburgerButtonProps
  extends Omit<ButtonProps, "children" | "variant" | "layout"> {
  isOpen?: boolean;
}

export interface MenuTabProps
  extends Omit<ButtonProps, "variant" | "children"> {
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
}

export interface StyledButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  layout?: ButtonLayout;
  fullWidth?: boolean;
  active?: boolean;
  isOpen?: boolean;
}
