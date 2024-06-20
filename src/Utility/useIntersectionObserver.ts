import { useEffect, useRef, RefObject } from 'react';

type UseIntersectionObserverProps<T extends HTMLElement> = {
    topOffset?: number;
    bottomOffset?: number;
    onEnter?: () => void;
    onLeave?: () => void;
    ref: RefObject<T>;
};

export const useIntersectionObserver = <T extends HTMLElement>({
    topOffset = 0,
    bottomOffset = 0,
    onEnter,
    onLeave,
    ref,
}: UseIntersectionObserverProps<T>): void => {
    const hasEntered = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!hasEntered.current && onEnter) {
                        onEnter();
                    }
                    hasEntered.current = true;
                } else {
                    if (hasEntered.current && onLeave) {
                        onLeave();
                    }
                    hasEntered.current = false;
                }
            });
        };

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: `${topOffset}px 0px ${bottomOffset}px 0px`,
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Initial check for intersection
        const checkInitialIntersection = () => {
            const rect = element.getBoundingClientRect();
            const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;

            if (inViewport && onEnter) {
                onEnter();
                hasEntered.current = true;
            }
        };

        checkInitialIntersection();

        observer.observe(element);

        return () => {
            if (observer && element) {
                observer.unobserve(element);
            }
        };
    }, [topOffset, bottomOffset, onEnter, onLeave, ref]);
};
