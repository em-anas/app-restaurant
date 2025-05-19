import React from "react";
import { BreadcrumbContainer } from "./styles";
import { SmallText } from "../Typography";
import type { BreadcrumbProps } from "./types";

export const Breadcrumb = ({ items, separator = "/" }: BreadcrumbProps) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <SmallText uppercase>{separator}</SmallText>}
          <SmallText
            {...(item.path && { as: "a", href: "/" })}
            variant={item.active ? "light" : "primary"}
            uppercase
          >
            {item.label}
          </SmallText>
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};
