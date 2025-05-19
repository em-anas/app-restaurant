import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../constants";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

type ScreenSize =
  | "smallMobile"
  | "mobile"
  | "smallTablet"
  | "tablet"
  | "smallDesktop"
  | "desktop"
  | "largeDesktop"
  | "extraLarge";

export const useIsMobile = () => {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE})`);
};

export const useIsSmallMobile = () => {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.SMALL_MOBILE})`);
};

export const useIsSmallTablet = () => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.MOBILE}) and (max-width: ${BREAKPOINTS.SMALL_TABLET})`
  );
};

export const useIsTablet = () => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.SMALL_TABLET}) and (max-width: ${BREAKPOINTS.TABLET})`
  );
};

export const useIsSmallDesktop = () => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.SMALL_DESKTOP})`
  );
};

export const useIsDesktop = () => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.SMALL_DESKTOP}) and (max-width: ${BREAKPOINTS.DESKTOP})`
  );
};

export const useIsLargeDesktop = () => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.DESKTOP}) and (max-width: ${BREAKPOINTS.LARGE_DESKTOP})`
  );
};

export const useIsExtraLarge = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.LARGE_DESKTOP})`);
};

export const useScreenSize = () => {
  const isSmallMobile = useIsSmallMobile();
  const isMobile = useIsMobile();
  const isSmallTablet = useIsSmallTablet();
  const isTablet = useIsTablet();
  const isSmallDesktop = useIsSmallDesktop();
  const isDesktop = useIsDesktop();
  const isLargeDesktop = useIsLargeDesktop();
  const isExtraLarge = useIsExtraLarge();

  const getCurrentSize = (): ScreenSize => {
    if (isSmallMobile) return "smallMobile";
    if (isMobile) return "mobile";
    if (isSmallTablet) return "smallTablet";
    if (isTablet) return "tablet";
    if (isSmallDesktop) return "smallDesktop";
    if (isDesktop) return "desktop";
    if (isLargeDesktop) return "largeDesktop";
    return "extraLarge";
  };

  return {
    isSmallMobile,
    isMobile,
    isSmallTablet,
    isTablet,
    isSmallDesktop,
    isDesktop,
    isLargeDesktop,
    isExtraLarge,
    currentSize: getCurrentSize(),
  };
};
