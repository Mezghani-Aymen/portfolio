import { useState, useEffect, useRef } from 'react';

export type ScrollDirection = 'up' | 'down' | 'none';

export const useScrollDirection = (threshold: number = 50) => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
    const prevScrollY = useRef(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - prevScrollY.current) < threshold) {
                return;
            }

            if (currentScrollY > prevScrollY.current && currentScrollY > threshold) {
                setScrollDirection('down');
            } else if (currentScrollY < prevScrollY.current) {
                setScrollDirection('up');
            }

            prevScrollY.current = currentScrollY;
        };

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDirection);
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return scrollDirection;
};