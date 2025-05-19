import { createGlobalStyle, css } from "styled-components";
import { type Theme } from "../theme";

// Font imports extracted to a separate constant for clarity
const fontImports = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Mochiy+Pop+One:wght@400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap");
`;

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${fontImports}

  :root {
    /* Colors */
    --color-primary: ${({ theme }) => theme.colors.PRIMARY};
    --color-secondary: ${({ theme }) => theme.colors.SECONDARY};
    --color-white: ${({ theme }) => theme.colors.WHITE};
    --color-dark: ${({ theme }) => theme.colors.DARK};
    --color-light: ${({ theme }) => theme.colors.LIGHT};
    --color-error: ${({ theme }) => theme.colors.ERROR};
    --color-success: ${({ theme }) => theme.colors.SUCCESS};
    --color-warning: ${({ theme }) => theme.colors.WARNING};
    --color-info: ${({ theme }) => theme.colors.INFO};
    --color-transparent: ${({ theme }) => theme.colors.TRANSPARENT};
    --color-background: ${({ theme }) => theme.colors.BACKGROUND};
    
    /* Gray scale */
    --color-gray-100: ${({ theme }) => theme.colors.GRAY_100};
    --color-gray-200: ${({ theme }) => theme.colors.GRAY_200};
    --color-gray-300: ${({ theme }) => theme.colors.GRAY_300};
    --color-gray-400: ${({ theme }) => theme.colors.GRAY_400};
    --color-gray-500: ${({ theme }) => theme.colors.GRAY_500};
    --color-gray-600: ${({ theme }) => theme.colors.GRAY_600};
    --color-gray-700: ${({ theme }) => theme.colors.GRAY_700};
    --color-gray-800: ${({ theme }) => theme.colors.GRAY_800};
    --color-gray-900: ${({ theme }) => theme.colors.GRAY_900};
    
    /* Typography */
    --font-main: ${({ theme }) => theme.fonts.MAIN};
    --font-logo: ${({ theme }) => theme.fonts.LOGO};
    --font-alt: ${({ theme }) => theme.fonts.ALT};
    --font-script: ${({ theme }) => theme.fonts.SCRIPT};
    --font-mono: ${({ theme }) => theme.fonts.MONO};
    
    /* Font sizes */
    --font-size-xs: ${({ theme }) => theme.fontSizes.XS};
    --font-size-small: ${({ theme }) => theme.fontSizes.SMALL};
    --font-size-medium: ${({ theme }) => theme.fontSizes.MEDIUM};
    --font-size-large: ${({ theme }) => theme.fontSizes.LARGE};
    --font-size-xl: ${({ theme }) => theme.fontSizes.XL};
    --font-size-xxl: ${({ theme }) => theme.fontSizes.XXL};
    --font-size-title: ${({ theme }) => theme.fontSizes.TITLE};
    --font-size-heading: ${({ theme }) => theme.fontSizes.HEADING};

    /* Font weights */
    --font-weight-normal: ${({ theme }) => theme.fontWeights.NORMAL};
    --font-weight-medium: ${({ theme }) => theme.fontWeights.MEDIUM};
    --font-weight-semibold: ${({ theme }) => theme.fontWeights.SEMIBOLD};
    --font-weight-bold: ${({ theme }) => theme.fontWeights.BOLD};
    --font-weight-extra-bold: ${({ theme }) => theme.fontWeights.EXTRA_BOLD};
    
    /* Line heights */
    --line-height-sm: ${({ theme }) => theme.lineHeights.SMALL};
    --line-height-md: ${({ theme }) => theme.lineHeights.MEDIUM};
    --line-height-lg: ${({ theme }) => theme.lineHeights.LARGE};
    
    /* Letter spacings */
    --letter-spacing-sm: ${({ theme }) => theme.letterSpacings.SMALL};
    --letter-spacing-zero: ${({ theme }) => theme.letterSpacings.ZERO};
    --letter-spacing-md: ${({ theme }) => theme.letterSpacings.MEDIUM};
    --letter-spacing-lg: ${({ theme }) => theme.letterSpacings.LARGE};
    --letter-spacing-xl: ${({ theme }) => theme.letterSpacings.EXTRA_LARGE};
    
    /* Spacing */
    --spacing-xs: ${({ theme }) => theme.spacing.XS};
    --spacing-sm: ${({ theme }) => theme.spacing.SM};
    --spacing-md: ${({ theme }) => theme.spacing.MD};
    --spacing-lg: ${({ theme }) => theme.spacing.LG};
    --spacing-xl: ${({ theme }) => theme.spacing.XL};
    --spacing-xxl: ${({ theme }) => theme.spacing.XXL};
    --spacing-xxxl: ${({ theme }) => theme.spacing.XXXL};
    
    /* Layout */
    --radius: ${({ theme }) => theme.layout.BORDER_RADIUS};
    --radius-sm: ${({ theme }) => theme.layout.BORDER_RADIUS_SM};
    --radius-lg: ${({ theme }) => theme.layout.BORDER_RADIUS_LG};
    --radius-full: ${({ theme }) => theme.layout.BORDER_RADIUS_FULL};
    --shadow: ${({ theme }) => theme.layout.SHADOW};
    --shadow-sm: ${({ theme }) => theme.layout.SHADOW_SM};
    --shadow-lg: ${({ theme }) => theme.layout.SHADOW_LG};
    --transition: ${({ theme }) => theme.layout.TRANSITION};
    --transition-fast: ${({ theme }) => theme.layout.TRANSITION_FAST};
    --transition-slow: ${({ theme }) => theme.layout.TRANSITION_SLOW};
    --max-width: ${({ theme }) => theme.layout.MAX_WIDTH};
    --header-height: ${({ theme }) => theme.layout.HEADER_HEIGHT};
    --header-height-tablet: ${({ theme }) => theme.layout.HEADER_HEIGHT_TABLET};
    --header-height-mobile: ${({ theme }) => theme.layout.HEADER_HEIGHT_MOBILE};
    
    /* Z-indices */
    --z-negative: ${({ theme }) => theme.zIndex.NEGATIVE};
    --z-base: ${({ theme }) => theme.zIndex.BASE};
    --z-elevated: ${({ theme }) => theme.zIndex.ELEVATED};
    --z-sticky: ${({ theme }) => theme.zIndex.STICKY};
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family: var(--font-main);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-normal);
    background: var(--color-light);
    color: var(--color-secondary);
    margin: 0;
    min-height: 100vh;
  }
  
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-secondary);
    }
  }
  
  button, input, textarea, select {
    font-family: var(--font-main);
    font-size: var(--font-size-medium);
    border-radius: var(--radius);
    border: none;
    outline: none;
  }
  
  button {
    cursor: pointer;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    color: var(--color-secondary);
  }
  
  h1 {
    font-size: var(--font-size-title);
    margin-bottom: var(--spacing-lg);
  }
  
  h2 {
    font-size: var(--font-size-xxl);
    margin-bottom: var(--spacing-md);
  }
  
  h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-sm);
  }
  
  h4 {
    font-size: var(--font-size-large);
    margin-bottom: var(--spacing-sm);
  }
  
  h5 {
    font-size: var(--font-size-medium);
    margin-bottom: var(--spacing-xs);
  }
  
  h6 {
    font-size: var(--font-size-small);
    margin-bottom: var(--spacing-xs);
  }
  
  p {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
  }
  
  small {
    font-size: var(--font-size-small);
  }
  
  blockquote {
    border-left: 4px solid var(--color-primary);
    margin-left: 0;
    padding-left: var(--spacing-md);
    font-style: italic;
  }
  
  code, pre {
    font-family: var(--font-mono);
    font-size: var(--font-size-small);
    background-color: var(--color-gray-100);
    border-radius: var(--radius-sm);
  }
  
  code {
    padding: 0.2em 0.4em;
  }
  
  pre {
    padding: var(--spacing-md);
    overflow-x: auto;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  hr {
    border: 0;
    height: 1px;
    background-color: var(--color-gray-300);
    margin: var(--spacing-lg) 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--spacing-md);
  }
  
  th, td {
    text-align: left;
    padding: var(--spacing-sm);
    border-bottom: 1px solid var(--color-gray-300);
  }
  
  th {
    font-weight: var(--font-weight-bold);
  }
  
  /* Responsive adjustments */
  ${({ theme }) => theme.mediaQueries.TABLET} {
    :root {
      --header-height: ${({ theme }) => theme.layout.HEADER_HEIGHT_TABLET};
      --max-width: ${({ theme }) => theme.layout.MAX_WIDTH_TABLET};
    }
    
    h1 {
      font-size: calc(var(--font-size-title) * 0.9);
    }
    
    h2 {
      font-size: calc(var(--font-size-xxl) * 0.9);
    }
  }
  
  ${({ theme }) => theme.mediaQueries.MOBILE} {
    :root {
      --header-height: ${({ theme }) => theme.layout.HEADER_HEIGHT_MOBILE};
      --max-width: ${({ theme }) => theme.layout.MAX_WIDTH_MOBILE};
      font-size: 15px;
    }
    
    h1 {
      font-size: calc(var(--font-size-title) * 0.8);
      margin-bottom: var(--spacing-md);
    }
    
    h2 {
      font-size: calc(var(--font-size-xxl) * 0.8);
    }
    
    h3 {
      font-size: calc(var(--font-size-xl) * 0.9);
    }
  }
`;
