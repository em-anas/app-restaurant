import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterNav, FooterNavItem, Divider } from "./styles";
import type { FooterProps } from "./types";
import { Paragraph } from "../common";

export const Footer: React.FC<FooterProps> = ({
  text = "© Your Site Name. All Rights Reserved.",
  navigationItems = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
  ],
}) => {
  return (
    <FooterContainer>
      {navigationItems.length > 0 && (
        <FooterNav>
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider>|</Divider>}
              <FooterNavItem as={Link} to={item.path} onClick={item.onClick}>
                {item.label}
              </FooterNavItem>
            </React.Fragment>
          ))}
        </FooterNav>
      )}

      <Paragraph variant="light" align="center">
        {text}
      </Paragraph>
    </FooterContainer>
  );
};
