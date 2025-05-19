import type React from "react";
import { Heading2 } from "../common";

export const SectionHeader: React.FC<{
  title: string;
  subTitle: string;
  isBgDark?: boolean;
}> = ({ title, subTitle, isBgDark = false }) => {
  return (
    <>
      <Heading2
        align="center"
        fontFamily="script"
        variant={isBgDark ? "light" : "secondary"}
      >
        {title}
      </Heading2>
      <Heading2 align="center" variant="primary">
        {subTitle}
      </Heading2>
    </>
  );
};
