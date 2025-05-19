export interface LayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export interface HeaderProps {
  logo?: React.ReactNode;
  logoText?: string;
  navigationItems?: NavigationItem[];
}

export interface FooterProps {
  text?: string;
  navigationItems?: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  path: string;
  isActive?: boolean;
  onClick?: () => void;
}

// Section Component

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  background?: "light" | "dark" | "white";
  padding?: "sm" | "md" | "lg" | "xl" | "none";
}

// Container Component

export interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

// Grid Component

export interface GridProps {
  children: React.ReactNode;
  gap?: number;
  columns?: number;
  rows?: number;
  spacing?: "xs" | "sm" | "md" | "lg";
}

// Box Component

export interface BoxProps {
  children?: React.ReactNode;
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  margin?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  shadow?: "sm" | "md" | "lg" | "none";
  radius?: "sm" | "md" | "lg" | "full" | "none";
  border?: boolean;
  background?:
    | "primary"
    | "secondary"
    | "light"
    | "dark"
    | "white"
    | "transparent";
  overflow?: "hidden" | "auto" | "visible" | "scroll";
  height?: string;
  width?: string;
}
