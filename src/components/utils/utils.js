import { useRef, useEffect } from 'react';

export const useInitialRender = () => {
    const initialRender = useRef(true);

    useEffect(() => {
        initialRender.current = false;
    }, []);

    return initialRender.current;
}