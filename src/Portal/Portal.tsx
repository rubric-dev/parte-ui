import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './Portal.types';

/**
 * A hook for scheduling a layout effect with a fallback to a regular effect for non-browser environments (ssr)
 */
const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useIsomorphicLayoutEffect(() => {
    setMounted(true);

    ref.current = document.createElement('div');
    ref.current.setAttribute('parte-portal-container', '');

    document.body.appendChild(ref.current);

    return () => {
      if (ref.current) document.body.removeChild(ref.current);
    };
  }, []);

  if (!mounted || !ref.current) {
    return null;
  }

  return createPortal(children, ref.current);
};

export default Portal;
