import { useEffect, useState } from 'react';

import { merge } from '../../Utility/merge';

type NetlifyImageProps = {
    originalSrc: string;
    originalWidth?: number;
    originalHeight?: number;
    alt: string;
    width?: number;
    placeholderWidth?: number;
    onLoad?: () => void;
    className?: string;
};

const loadImageSrc = (src: string) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = src;
    });

const convertUrlToNetlifyUrl = (url: string, width?: number) => {
    if (process.env.NODE_ENV === 'production') {
        let netlifyUrl = `/.netlify/images?url=${url}`;

        if (width) {
            netlifyUrl += `&width=${width}`;
        }

        return netlifyUrl;
    } else {
        return url;
    }
};

export const NetlifyImg = ({
    originalHeight,
    originalSrc,
    originalWidth,
    alt,
    width,
    placeholderWidth = 100,
    onLoad,
    className,
}: NetlifyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const fullWidthSrc = convertUrlToNetlifyUrl(originalSrc, width);
    const placeholderSrc = convertUrlToNetlifyUrl(originalSrc, placeholderWidth);

    useEffect(() => {
        let isMounted = true;

        loadImageSrc(fullWidthSrc)
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
    }, [fullWidthSrc, onLoad]);

    return (
        <img
            width={originalWidth}
            height={originalHeight}
            src={isLoaded ? fullWidthSrc : placeholderSrc}
            className={merge(className, !isLoaded && 'tw-blur-lg')}
            alt={alt}
        />
    );
};
