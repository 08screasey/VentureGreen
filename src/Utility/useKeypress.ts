import { useEffect } from 'react';

type UseKeypressOptions = { key: string; callback: () => void; enabled?: boolean };

export const useKeypress = ({ key, enabled, callback }: UseKeypressOptions) => {
    useEffect(() => {
        if (enabled) {
            document.addEventListener('keydown', callback);
        }
        return () => {
            if (enabled) {
                document.removeEventListener('keydown', callback);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key, enabled]);
};
