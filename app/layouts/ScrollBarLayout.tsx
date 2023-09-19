'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

import './ScrollBarLayout.scss';

const ScrollBarLayout = ({ children }: { children: ReactNode }) => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const current = scrollbarRef.current;
    if (current) {
      const scrollbar = Scrollbar.init(current, { damping: 0.05 });
    }

    return () => {
      if (current) {
        Scrollbar.destroy(current);
      }
    };
  }, []);

  return <div ref={scrollbarRef}>{children}</div>;
};

export { ScrollBarLayout };
