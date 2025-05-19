export type TypographyProps = {
  color?: string;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "light"
    | "dark"
    | "error"
    | "success"
    | "warning"
    | "info";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extraBold";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "title" | "heading";
  lineHeight?: "sm" | "md" | "lg" | string;
  letterSpacing?: "sm" | "zero" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right" | "justify";
  noMargin?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  fontFamily?: "main" | "script" | "alt" | "logo" | "mono";
};

export type ParagraphProps = TypographyProps & {
  spacing?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
};
