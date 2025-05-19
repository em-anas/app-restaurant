import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainContent } from "./styles";
import type { LayoutProps } from "./types";
import { AppIcon } from "../../assets";

export const PageLayout: React.FC<LayoutProps> = ({
  children,
  headerProps = {},
  footerProps = {},
  hideFooter = false,
  hideHeader = false,
}) => (
  <>
    {!hideHeader && <Header logo={<AppIcon />} {...headerProps} />}
    <MainContent>{children}</MainContent>
    {!hideFooter && <Footer {...footerProps} />}
  </>
);
