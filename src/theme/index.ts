import { COLORS } from "../constants/colors";
import {
  FONTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
} from "../constants/typography";
import {
  LAYOUT,
  SPACING,
  BREAKPOINTS,
  MEDIA_QUERIES,
  Z_INDEX,
} from "../constants/layout";

export const theme = {
  colors: COLORS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  lineHeights: LINE_HEIGHTS,
  letterSpacings: LETTER_SPACINGS,
  spacing: SPACING,
  layout: LAYOUT,
  breakpoints: BREAKPOINTS,
  mediaQueries: MEDIA_QUERIES,
  zIndex: Z_INDEX,
};

export type Theme = typeof theme;
