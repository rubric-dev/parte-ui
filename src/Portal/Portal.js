import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
const Portal = (props) => {
    const { children } = props;
    const [mounted, setMounted] = useState(false);
    const rootDom = document.getElementById('root');
    useIsomorphicLayoutEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted || !rootDom) {
        return null;
    }
    return createPortal(children, rootDom);
};
export default Portal;
