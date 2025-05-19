/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ContactDetailProps {
  icon: React.ReactNode;
  text: string;
}
export interface ContactCardProps {
  title: string;
  details: {
    icon: React.ReactNode;
    text: string;
  }[];
}

export interface ContactFormProps {
  onFormSubmit?: (values: any) => void;
}

// Section header

export interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  center?: boolean;
}
