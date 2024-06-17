import { type RefObject, useEffect } from 'react';

type UseClickOutsideProps<T extends HTMLElement> = {
    ref: RefObject<T>;
    callback: () => void;
    enabled?: boolean;
};

export const useClickOutside = <T extends HTMLElement>({ ref, callback, enabled = true }: UseClickOutsideProps<T>) => {
    useEffect(() => {
        if (enabled) {
            const callbackIfClickedOutside = (event: MouseEvent) => {
                if (!(ref.current && event.target instanceof Node && ref.current.contains(event.target))) {
                    callback();
                }
            };
            document.addEventListener('mousedown', callbackIfClickedOutside);

            return () => {
                document.removeEventListener('mousedown', callbackIfClickedOutside);
            };
        }
    }, [enabled, ref, callback]);
};
