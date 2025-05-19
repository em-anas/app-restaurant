export const getInputPadding = (fieldSize?: string) => {
  switch (fieldSize) {
    case "sm":
      return "var(--spacing-xs) var(--spacing-sm)";
    case "lg":
      return "var(--spacing-md) var(--spacing-lg)";
    default:
      return "var(--spacing-sm) var(--spacing-md)";
  }
};

export const getInputFontSize = (fieldSize?: string) => {
  switch (fieldSize) {
    case "sm":
      return "var(--font-size-small)";
    case "lg":
      return "var(--font-size-large)";
    default:
      return "var(--font-size-medium)";
  }
};

export const getInputBorder = (
  variant?: string,
  hasError?: boolean,
  isSuccess?: boolean
) => {
  const borderColor = hasError
    ? "var(--color-error)"
    : isSuccess
    ? "var(--color-success)"
    : "var(--color-gray-300)";

  switch (variant) {
    case "filled":
      return `none`;
    case "standard":
      return `none`;
    default:
      return `1.5px solid ${borderColor}`;
  }
};

export const getInputBackground = (variant?: string) => {
  switch (variant) {
    case "filled":
      return "var(--color-gray-100)";
    default:
      return "var(--color-white)";
  }
};
