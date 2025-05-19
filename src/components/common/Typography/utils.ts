export const getColor = (variant?: string, color?: string) => {
  if (color) return color;

  if (variant) {
    switch (variant) {
      case "primary":
        return "var(--color-primary)";
      case "secondary":
        return "var(--color-secondary)";
      case "accent":
        return "var(--color-primary)";
      case "light":
        return "var(--color-light)";
      case "dark":
        return "var(--color-dark)";
      case "error":
        return "var(--color-error)";
      case "success":
        return "var(--color-success)";
      case "warning":
        return "var(--color-warning)";
      case "info":
        return "var(--color-info)";
      default:
        return "var(--color-secondary)";
    }
  }

  return "var(--color-secondary)";
};

export const getWeight = (weight?: string) => {
  if (!weight) return "var(--font-weight-normal)";

  switch (weight) {
    case "normal":
      return "var(--font-weight-normal)";
    case "medium":
      return "var(--font-weight-medium)";
    case "semibold":
      return "var(--font-weight-semibold)";
    case "bold":
      return "var(--font-weight-bold)";
    case "extraBold":
      return "var(--font-weight-extra-bold)";
    default:
      return "var(--font-weight-normal)";
  }
};

export const getFontSize = (size?: string) => {
  if (!size) return "var(--font-size-medium)";

  switch (size) {
    case "xs":
      return "var(--font-size-xs)";
    case "sm":
      return "var(--font-size-small)";
    case "md":
      return "var(--font-size-medium)";
    case "lg":
      return "var(--font-size-large)";
    case "xl":
      return "var(--font-size-xl)";
    case "xxl":
      return "var(--font-size-xxl)";
    case "title":
      return "var(--font-size-title)";
    case "heading":
      return "var(--font-size-heading)";
    default:
      return "var(--font-size-medium)";
  }
};

export const getLineHeight = (lineHeight?: string) => {
  if (!lineHeight) return "var(--line-height-md)";

  switch (lineHeight) {
    case "sm":
      return "var(--line-height-sm)";
    case "md":
      return "var(--line-height-md)";
    case "lg":
      return "var(--line-height-lg)";
    default:
      return lineHeight;
  }
};

export const getLetterSpacing = (letterSpacing?: string) => {
  if (!letterSpacing) return "var(--letter-spacing-zero)";

  switch (letterSpacing) {
    case "sm":
      return "var(--letter-spacing-sm)";
    case "zero":
      return "var(--letter-spacing-zero)";
    case "md":
      return "var(--letter-spacing-md)";
    case "lg":
      return "var(--letter-spacing-lg)";
    case "xl":
      return "var(--letter-spacing-xl)";
    default:
      return letterSpacing;
  }
};

export const getFontFamily = (fontFamily?: string) => {
  if (!fontFamily) return "var(--font-main)";

  switch (fontFamily) {
    case "main":
      return "var(--font-main)";
    case "script":
      return "var(--font-script)";
    case "mono":
      return "var(--font-mono)";
    case "logo":
      return "var(--font-logo)";
    case "alt":
      return "var(--font-alt)";
    default:
      return fontFamily;
  }
};
