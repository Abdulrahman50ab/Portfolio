import { useCallback } from 'react';
import { useLenis } from 'lenis/react';

const PROGRAMMATIC_DURATION = 1.15;

/**
 * Scrolls to a portfolio section through Lenis so every navigation control
 * shares the same easing. Lenis reads the html scroll-padding-top value, which
 * keeps the target clear of the sticky header.
 */
export const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (sectionId === 'home') {
        if (lenis) lenis.scrollTo(0, { duration: PROGRAMMATIC_DURATION });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.getElementById(sectionId);
      if (!element) return;

      if (lenis) {
        lenis.scrollTo(element, { duration: PROGRAMMATIC_DURATION });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [lenis]
  );

  const scrollToTop = useCallback(() => {
    if (lenis) lenis.scrollTo(0, { duration: PROGRAMMATIC_DURATION });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lenis]);

  return { scrollToSection, scrollToTop };
};
