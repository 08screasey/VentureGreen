import { useEffect, useRef, useCallback, WheelEvent, KeyboardEvent, RefObject, useState, TouchEvent } from 'react';

type UseAutoScrollProps<T extends HTMLElement> = {
    scrollRef: RefObject<T>;
    duration: number;
    delay?: number;
};

type UseAutoScrollReturn<T extends HTMLElement> = {
    onWheel: (event: WheelEvent<T>) => void;
    onKeyDown: (event: KeyboardEvent<T>) => void;
    onTouchStart: (event: TouchEvent<T>) => void;
};

export const useAutoScroll = <T extends HTMLElement>({
    scrollRef,
    duration,
    delay,
}: UseAutoScrollProps<T>): UseAutoScrollReturn<T> => {
    const intervalRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const [isDelayFinished, setIsDelayFinished] = useState(false);
    const stopScrolling = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element || !isDelayFinished) return;

        const totalHeight = element.scrollHeight - element.clientHeight;

        const scrollStep = () => {
            if (!startTimeRef.current) {
                startTimeRef.current = Date.now();
            }
            const elapsed = Date.now() - startTimeRef.current;
            const progress = elapsed / duration;
            const scrollTop = totalHeight * progress;
            element.scrollTop = scrollTop;

            if (progress >= 1) {
                stopScrolling();
            }
        };

        intervalRef.current = window.setInterval(scrollStep, 10);

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [scrollRef, duration, stopScrolling, isDelayFinished]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsDelayFinished(true);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [delay]);

    const handleUserInteraction = useCallback(() => {
        stopScrolling();
    }, [stopScrolling]);

    return {
        onWheel: handleUserInteraction,
        onKeyDown: handleUserInteraction,
        onTouchStart: handleUserInteraction,
    };
};
