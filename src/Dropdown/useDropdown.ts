import { useEffect, useRef, useState } from 'react';
import styleReset from '../common/styleReset';

export const useDropdown = (defaultIndex = -1) => {
  const indexRef = useRef(defaultIndex);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootElement = document.getElementById('root');

    const onKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (dropdownRef.current) {
        const rowChildren = dropdownRef.current.children;

        const validRows = Array.from(rowChildren).filter(
          (chapter) => (chapter as HTMLElement).tabIndex !== -1
        );

        if (e.key === 'ArrowUp' && indexRef.current !== 0) {
          indexRef.current -= 1;
        } else if (e.key === 'ArrowDown') {
          indexRef.current += 1;

          if (indexRef.current === validRows.length - 1) {
            indexRef.current = 0;
          }
        }

        const child = validRows[indexRef.current] as HTMLElement;
        child.focus();
      }

      if (e.key === 'Enter') {
        console.log(e.target);
      }
    };
    rootElement?.addEventListener('keydown', onKeyDown);
    return () => rootElement?.removeEventListener('keydown', onKeyDown);
  }, []);

  return {
    dropdownRef,
  };
};
