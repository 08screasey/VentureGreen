import { useLayoutEffect, useState } from 'react';

import { loadImageSrc } from './loadImageSrc';

export const useLoadImage = ({
    src,
    enabled = true,
    onLoad,
}: {
    src: string;
    enabled?: boolean;
    onLoad?: () => void;
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useLayoutEffect(() => {
        if (enabled) {
            let isMounted = true;

            loadImageSrc(src)
                .then(() => {
                    if (isMounted) {
                        setIsLoaded(true);
                        onLoad?.();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });

            return () => {
                isMounted = false;
            };
        }
    }, [src, onLoad, enabled]);

    return { isLoaded };
};
