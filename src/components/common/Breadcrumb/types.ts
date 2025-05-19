export interface BreadcrumbItem {
  label: string;
  path?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}
