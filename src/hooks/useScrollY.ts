import {useEffect, useState} from "react";

export const useScrollY = (): number => {

    const isBrowser: boolean = typeof window !== 'undefined';

    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = () => {
        const currentScrollY: number = isBrowser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    };

    useEffect( () => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
};
