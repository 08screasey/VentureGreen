import { useEffect } from 'react';

type UseKeypressOptions = { key: string; callback: () => void; enabled?: boolean };

export const useKeypress = ({ key, enabled = true, callback }: UseKeypressOptions) => {
    useEffect(() => {
        const callbackIfKeyPressed = (event: KeyboardEvent) => {
            if (event.key === key) {
                callback();
            }
        };

        if (enabled) {
            document.addEventListener('keydown', callbackIfKeyPressed);
        }
        return () => {
            if (enabled) {
                document.removeEventListener('keydown', callbackIfKeyPressed);
            }
        };
    }, [key, enabled, callback]);
};
