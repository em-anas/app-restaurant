import styled, { css } from "styled-components";
import {
  getColor,
  getWeight,
  getFontSize,
  getLineHeight,
  getLetterSpacing,
  getFontFamily,
} from "./utils";
import type { ParagraphProps, TypographyProps } from "./types";

export const baseTextStyles = css<TypographyProps>`
  margin: 0;
  padding: 0;
  font-family: ${({ fontFamily }) => getFontFamily(fontFamily)};
`;

export const typographyStyles = css<TypographyProps>`
  color: ${({ variant, color }) => getColor(variant, color)};
  font-weight: ${({ weight }) => getWeight(weight)};
  font-size: ${({ size }) => getFontSize(size)};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight)};
  letter-spacing: ${({ letterSpacing }) => getLetterSpacing(letterSpacing)};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-align: ${({ align }) => align || "left"};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "")};
`;

export const Title = styled.h1<TypographyProps>`
  ${baseTextStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-heading)"};
  font-weight: ${({ weight }) => getWeight(weight || "extraBold")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "sm")};
  letter-spacing: ${({ letterSpacing }) => getLetterSpacing(letterSpacing)};
  color: ${({ variant, color }) => getColor(variant || "primary", color)};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-lg)")};
  text-align: ${({ align }) => align || "left"};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`;

export const SubTitle = styled.p<TypographyProps>`
  ${baseTextStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-medium)"};
  font-weight: ${({ weight }) => getWeight(weight || "normal")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "md")};
  letter-spacing: ${({ letterSpacing }) => getLetterSpacing(letterSpacing)};
  color: ${({ variant, color }) => getColor(variant || "secondary", color)};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-md)")};
  text-align: ${({ align }) => align || "left"};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const Heading1 = styled.h1<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-title)"};
  font-weight: ${({ weight }) => getWeight(weight || "extraBold")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "sm")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-lg)")};
`;

export const Heading2 = styled.h2<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-xxl)"};
  font-weight: ${({ weight }) => getWeight(weight || "bold")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "sm")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-md)")};
`;

export const Heading3 = styled.h3<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-xl)"};
  font-weight: ${({ weight }) => getWeight(weight || "bold")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "sm")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-sm)")};
`;

export const Heading4 = styled.h4<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-large)"};
  font-weight: ${({ weight }) => getWeight(weight || "medium")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "md")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-sm)")};
`;

export const Heading5 = styled.h5<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-medium)"};
  font-weight: ${({ weight }) => getWeight(weight || "medium")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "md")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-sm)")};
`;

export const Heading6 = styled.h6<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-small)"};
  font-weight: ${({ weight }) => getWeight(weight || "semibold")};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "md")};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "var(--spacing-xs)")};
`;

export const Paragraph = styled.p<ParagraphProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-medium)"};
  line-height: ${({ lineHeight }) => getLineHeight(lineHeight || "md")};
  margin-bottom: ${({ noMargin, spacing }) => {
    if (noMargin) return "0";
    if (!spacing || spacing === "md") return "var(--spacing-md)";
    if (spacing === "none") return "0";
    return `var(--spacing-${spacing})`;
  }};
`;

export const SmallText = styled.p<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-small)"};
  margin-bottom: 0;
`;

export const AccentText = styled.p<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-family: var(--font-script);
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-large)"};
  color: ${({ variant, color }) => getColor(variant || "primary", color)};
`;

export const BoldText = styled.strong<TypographyProps>`
  ${typographyStyles}
  font-weight: ${({ weight }) => getWeight(weight || "bold")};
`;

export const ItalicText = styled.em<TypographyProps>`
  ${typographyStyles}
  font-style: italic;
`;

export const Label = styled.label<TypographyProps>`
  ${baseTextStyles}
  ${typographyStyles}
  font-size: ${({ size }) =>
    size ? getFontSize(size) : "var(--font-size-small)"};
  font-weight: ${({ weight }) => getWeight(weight || "medium")};
  display: inline-block;
  margin-bottom: var(--spacing-xs);
`;
