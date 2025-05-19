import React from "react";
import {
  StyledButton,
  StyledHamburgerButton,
  StyledClearButton,
  StyledMenuTab,
} from "./styles";
import type {
  ButtonProps,
  IconButtonProps,
  HamburgerButtonProps,
  MenuTabProps,
} from "./types";

/**
 * Base Button component with various styling options
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  shape = "rectangle",
  layout,
  fullWidth = false,
  active = false,
  isOpen,
  children,
  ...props
}) => (
  <StyledButton
    variant={variant}
    size={size}
    shape={shape}
    layout={layout}
    fullWidth={fullWidth}
    active={active}
    isOpen={isOpen}
    {...props}
  >
    {children}
  </StyledButton>
);

/**
 * Primary button with pre-defined primary styling
 */
export const PrimaryButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="primary" />;

/**
 * Secondary button with pre-defined secondary styling
 */
export const SecondaryButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="secondary" />;

/**
 * Navigation button with pre-defined nav styling and flex layout
 */
export const NavButton: React.FC<Omit<ButtonProps, "variant">> = (props) => (
  <Button {...props} variant="nav" layout="flex" />
);

/**
 * Link button that appears as a hyperlink
 */
export const LinkButton: React.FC<Omit<ButtonProps, "variant">> = (props) => (
  <Button {...props} variant="link" />
);

/**
 * Outline button with secondary color border
 */
export const OutlineButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="outline" />;

/**
 * Outline button with primary color border
 */
export const OutlinePrimaryButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="outlinePrimary" />;

/**
 * Tab button for navigation tabs
 */
export const TabButton: React.FC<Omit<ButtonProps, "variant">> = (props) => (
  <Button {...props} variant="tab" />
);

/**
 * Icon button that can optionally include a text label
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  size = "small",
  variant = "transparent",
  ...props
}) => (
  <Button
    variant={variant}
    size={size}
    shape={label ? "rectangle" : "circle"}
    layout="flex"
    {...props}
  >
    {icon}
    {label && <span style={{ marginLeft: "var(--spacing-sm)" }}>{label}</span>}
  </Button>
);

/**
 * Dietary preference button with toggle behavior
 */
export const DietaryButton: React.FC<Omit<ButtonProps, "shape" | "variant">> = (
  props
) => (
  <Button
    {...props}
    shape="rounded"
    variant={props.active ? "primary" : "outline"}
  />
);

/**
 * Button for clearing filters with link styling
 */
export const ClearFiltersButton: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="link" />;

/**
 * Hamburger menu button for mobile navigation
 */
export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen = false,
  ...props
}) => (
  <StyledHamburgerButton
    variant="transparent"
    layout="flexColumn"
    isOpen={isOpen}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    {...props}
  >
    <span />
    <span />
    <span />
  </StyledHamburgerButton>
);

/**
 * Clear button (X) for input fields
 */
export const ClearButton: React.FC<
  Omit<ButtonProps, "variant" | "children">
> = (props) => (
  <StyledClearButton variant="transparent" aria-label="Clear input" {...props}>
    ×
  </StyledClearButton>
);

/**
 * Menu tab with icon, label and optional sublabel
 */
export const MenuTab: React.FC<MenuTabProps> = ({
  icon,
  label,
  sublabel,
  active = false,
  ...props
}) => (
  <StyledMenuTab variant="tab" active={active} layout="flexStart" {...props}>
    {icon}
    <div className="tab-label">
      <strong>{label}</strong>
      {sublabel && <span>{sublabel}</span>}
    </div>
  </StyledMenuTab>
);

