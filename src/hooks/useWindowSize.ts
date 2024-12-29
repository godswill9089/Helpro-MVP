/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
// import { isMobile as moduleIsMobile } from 'react-device-detect';

const MAX_MOBILE_SCREEN_WIDTH = 600;

interface IWindow {
  windowSize: { width: number | undefined; height: number | undefined };
  isMobile: boolean;
}

// Hook
export default function useWindowSize(): IWindow {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsMobile(window.innerWidth <= MAX_MOBILE_SCREEN_WIDTH);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return { windowSize, isMobile };
}
