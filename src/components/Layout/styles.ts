import styled from "styled-components";
import type { Theme } from "../../theme";

// Header Styles
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  height: var(--header-height-tablet);
  background: var(--color-secondary);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding: 0 1.5rem;
    height: var(--header-height-tablet);
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
    height: var(--header-height-mobile);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    fill: var(--color-primary);
    width: 32px;
    height: 32px;

    @media (max-width: 600px) {
      width: 28px;
      height: 28px;
    }
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  color: var(--color-light);
`;

export const Navigation = styled.nav<{ isMobile?: boolean }>`
  display: flex;

  ${({ isMobile }) =>
    isMobile &&
    `
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: var(--color-secondary);
    
    @media (max-width: 900px) {
      top: 70px;
    }
    
    @media (max-width: 600px) {
      top: 60px;
    }
  `}
`;

export const NavigationList = styled.ul<{ isMobile?: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    gap: 1rem;
  }

  ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    gap: 1.5rem;
    
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  `}
`;

export const NavigationItem = styled.li<{ isMobile?: boolean }>`
  ${({ isMobile }) =>
    isMobile &&
    `
    width: 100%;
    text-align: center;
  `}
`;

export const MobileMenuToggle = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

// Footer Styles
export const FooterContainer = styled.footer`
  background: var(--color-secondary);
  color: var(--color-white);
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
`;

export const FooterNav = styled.nav`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterNavItem = styled.a`
  color: var(--color-white);
  text-decoration: none;
  padding: 0.25rem;

  &:hover {
    color: var(--color-primary);
  }
`;

export const Divider = styled.span`
  color: var(--color-gray-500);
`;

// Main Layout
export const MainContent = styled.main<{ theme: Theme }>`
  min-height: calc(100vh - 280px);

  ${({ theme }) => theme.mediaQueries.TABLET} {
    min-height: calc(100vh - 270px);
  }

  ${({ theme }) => theme.mediaQueries.MOBILE} {
    min-height: calc(100vh - 260px);
  }
`;

// Section Styles

export const StyledSection = styled.section<{
  background: string;
  padding: string;
  theme?: Theme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem 2rem;
  background-color: ${({ background }) =>
    background === "light"
      ? "var(--color-light)"
      : background === "dark"
      ? "var(--color-dark)"
      : "var(--color-white)"};

  padding: ${({ padding }) =>
    padding === "sm"
      ? "var(--spacing-md)"
      : padding === "md"
      ? "var(--spacing-lg)"
      : padding === "lg"
      ? "var(--spacing-xl)"
      : padding === "xl"
      ? "var(--spacing-xxl)"
      : "0"};

  ${({ theme }) => theme.mediaQueries.TABLET} {
    flex-direction: column;
    gap: 2rem 1rem;
  }
`;

// Container Styles

export const StyledContainer = styled.div<{ fullWidth: boolean }>`
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "var(--max-width)")};
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

// Grid Styles

export const StyledGrid = styled.div<{
  gap?: number;
  columns?: number;
  rows?: number;
  spacing?: string;
  theme?: Theme;
}>`
  display: grid;
  grid-template-columns: ${({ columns = 1 }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows = 1 }) => `repeat(${rows}, 2fr)`};
  

  gap: ${({ gap, spacing }) =>
    gap
      ? gap
      : spacing === "xs"
      ? "var(--spacing-xs)"
      : spacing === "sm"
      ? "var(--spacing-sm)"
      : spacing === "md"
      ? "var(--spacing-md)"
      : spacing === "lg"
      ? "var(--spacing-lg)"
      : "var(--spacing-xs)"};

    ${({ theme }) => theme.mediaQueries.TABLET} {
        grid-template-columns: ${({ columns = 1 }) =>
          `repeat(${columns / columns}, 1fr)`};
  grid-template-rows: ${({ rows = 1 }) => `repeat(${rows}, 2fr)`};
    }}
`;

// Box Styles

export const StyledBox = styled.div<{
  padding: string;
  margin: string;
  shadow: string;
  radius: string;
  border: boolean;
  background: string;
  overflow: string;
  height?: string;
  width?: string;
}>`
  padding: ${({ padding }) =>
    padding === "xs"
      ? "var(--spacing-xs)"
      : padding === "sm"
      ? "var(--spacing-sm)"
      : padding === "md"
      ? "var(--spacing-md)"
      : padding === "lg"
      ? "var(--spacing-lg)"
      : padding === "xl"
      ? "var(--spacing-xl)"
      : "0"};

  margin: ${({ margin }) =>
    margin === "xs"
      ? "var(--spacing-xs)"
      : margin === "sm"
      ? "var(--spacing-sm)"
      : margin === "md"
      ? "var(--spacing-md)"
      : margin === "lg"
      ? "var(--spacing-lg)"
      : margin === "xl"
      ? "var(--spacing-xl)"
      : "0"};

  box-shadow: ${({ shadow }) =>
    shadow === "sm"
      ? "var(--shadow-sm)"
      : shadow === "md"
      ? "var(--shadow)"
      : shadow === "lg"
      ? "var(--shadow-lg)"
      : "none"};

  border-radius: ${({ radius }) =>
    radius === "sm"
      ? "var(--radius-sm)"
      : radius === "md"
      ? "var(--radius)"
      : radius === "lg"
      ? "var(--radius-lg)"
      : radius === "full"
      ? "var(--radius-full)"
      : "0"};

  border: ${({ border }) =>
    border ? "1px solid var(--color-gray-300)" : "none"};

  background-color: ${({ background }) =>
    background === "primary"
      ? "var(--color-primary)"
      : background === "secondary"
      ? "var(--color-secondary)"
      : background === "light"
      ? "var(--color-light)"
      : background === "dark"
      ? "var(--color-dark)"
      : background === "white"
      ? "var(--color-white)"
      : "transparent"};

  overflow: ${({ overflow }) => overflow};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
`;

// Fav Badge

export const FavoritesButtonContainer = styled.div`
  margin-right: var(--spacing-md);
  position: relative;
`;

export const FavoritesBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;
