import { ForwardedRef, useEffect, useRef } from 'react';

export const useForwardedRef = <T extends any>(ref: ForwardedRef<T | null>) => {
    const innerRef = useRef<T | null>(null);

    useEffect(() => {
        if (!ref) return;
        if (typeof ref === 'function') {
            (ref as (node: T | null) => void)(innerRef.current);
        } else {
            ref.current = innerRef.current;
        }
    });

    return innerRef;
};
