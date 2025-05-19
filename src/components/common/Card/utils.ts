export const getCardPadding = (padding?: string | number): string => {
  if (padding === undefined) return "var(--spacing-lg)";
  if (typeof padding === "number") return `${padding}px`;
  return padding;
};

export const getCardShadow = (shadow?: "none" | "sm" | "md" | "lg"): string => {
  switch (shadow) {
    case "none":
      return "none";
    case "sm":
      return "var(--shadow-sm)";
    case "lg":
      return "var(--shadow-lg)";
    case "md":
    default:
      return "var(--shadow)";
  }
};

export const getCardRadius = (
  radius?: "none" | "sm" | "md" | "lg" | "full"
): string => {
  switch (radius) {
    case "none":
      return "0";
    case "sm":
      return "var(--radius-sm)";
    case "lg":
      return "var(--radius-lg)";
    case "full":
      return "var(--radius-full)";
    case "md":
    default:
      return "var(--radius)";
  }
};

export const getCardAlignment = (
  align?: "start" | "center" | "end"
): string => {
  switch (align) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
    default:
      return "center";
  }
};
