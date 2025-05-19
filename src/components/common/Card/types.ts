export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: string | number;
  elevated?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
  align?: "start" | "center" | "end";
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  bgColor?: string;
  children?: React.ReactNode;
}

export type CardVariant = "default" | "image" | "content" | "action";

export interface StyledCardProps {
  variant?: CardVariant;
  padding?: string | number;
  fullWidth?: boolean;
  align?: "start" | "center" | "end";
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  bgColor?: string;
}
