import { useEffect, useState, useCallback } from 'react';

type ScrollPosition = {
  x: number;
  y: number;
};


export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
  });

  const handleScroll = useCallback(() => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback(({ x, y }: Partial<ScrollPosition>) => {
    window.scrollTo({
      left: x !== undefined ? x : scrollPosition.x,
      top: y !== undefined ? y : scrollPosition.y,
      behavior: 'smooth',
    });
  }, [scrollPosition]);

  const scrollToTop = useCallback(() => {
    scrollTo({ y: 0 });
  }, [scrollTo]);

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    scrollX: scrollPosition.x,
    scrollY: scrollPosition.y,
    scrollPosition,
    scrollTo,
    scrollToTop,
    scrollToElement,
  };
} 