import { useEffect, useState } from 'react';

interface UseMobileView {
  isMobileView: boolean;
  mobileViewBreakPoint: number;
  handleSetMobileViewBreakPoint: (mobileViewBreakPoint: number) => void;
}

export const useMobileView = (breakpoint = 540): UseMobileView => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [mobileViewBreakPoint, setMobileViewBreakPoint] = useState(breakpoint);

  useEffect(() => {
    if (window.innerWidth < breakpoint) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setIsMobileView(event.currentTarget!.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSetMobileViewBreakPoint = (breakpoint: number) => {
    setMobileViewBreakPoint(breakpoint);
  };

  return {
    isMobileView,
    mobileViewBreakPoint,
    handleSetMobileViewBreakPoint,
  };
};
