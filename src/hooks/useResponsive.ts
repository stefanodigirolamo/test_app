import { createBreakpoint, useMedia } from "react-use";

export const BREAKPOINTS = {
  sm: 767,
  md: 1023,
  lg: 1599,
  xl: 1919
};

export function useResponsive() {
  const isSm = useMedia(`(min-width: ${BREAKPOINTS.sm}px)`, true);
  const isMd = useMedia(`(min-width: ${BREAKPOINTS.md}px)`, false);
  const isLg = useMedia(`(min-width: ${BREAKPOINTS.lg}px)`, false);
  const isXl = useMedia(`(min-width: ${BREAKPOINTS.xl}px)`, false);

  return { isSm, isMd, isLg, isXl };
}

export const useBreakpoint = createBreakpoint(
  BREAKPOINTS
) as () => keyof typeof BREAKPOINTS;
