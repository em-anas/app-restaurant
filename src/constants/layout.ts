export const SPACING = {
  XS: "0.25rem", // 4px
  SM: "0.5rem", // 8px
  MD: "1rem", // 16px
  LG: "1.5rem", // 24px
  XL: "2rem", // 32px
  XXL: "3rem", // 48px
  XXXL: "4rem", // 64px
};

export const LAYOUT = {
  MAX_WIDTH: "1200px",
  MAX_WIDTH_TABLET: "900px",
  MAX_WIDTH_MOBILE: "100vw",
  HEADER_HEIGHT: "72px",
  HEADER_HEIGHT_TABLET: "56px",
  HEADER_HEIGHT_MOBILE: "48px",
  BORDER_RADIUS: "8px",
  BORDER_RADIUS_SM: "4px",
  BORDER_RADIUS_LG: "12px",
  BORDER_RADIUS_FULL: "9999px",
  SHADOW: "0 2px 8px rgba(0,0,0,0.07)",
  SHADOW_SM: "0 1px 3px rgba(0,0,0,0.1)",
  SHADOW_LG: "0 10px 30px rgba(0,0,0,0.1)",
  TRANSITION: "0.3s cubic-bezier(.4,0,.2,1)",
  TRANSITION_FAST: "0.15s ease",
  TRANSITION_SLOW: "0.5s ease",
};

export const BREAKPOINTS = {
  SMALL_MOBILE: "375px",
  MOBILE: "600px",
  SMALL_TABLET: "768px",
  TABLET: "900px",
  SMALL_DESKTOP: "1024px",
  DESKTOP: "1200px",
  LARGE_DESKTOP: "1440px",
  EXTRA_LARGE: "1920px",
};

export const MEDIA_QUERIES = Object.entries(BREAKPOINTS).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: `@media (max-width: ${value})`,
  }),
  {} as Record<keyof typeof BREAKPOINTS, string>
);

export const Z_INDEX = {
  NEGATIVE: -1,
  BASE: 0,
  ELEVATED: 1,
  STICKY: 100,
};
