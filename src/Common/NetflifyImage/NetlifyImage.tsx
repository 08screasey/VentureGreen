import { useLayoutEffect, useState } from 'react';

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
    blurPlaceholder?: boolean;
    usePlaceholder?: boolean;
};

const loadImageSrc = (src: string) =>
    new Promise<void>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => reject();
        image.src = src;
        if (image.complete) {
            resolve();
        }
    });

const convertUrlToNetlifyUrl = (url: string, width?: number) => {
    if (process.env.NODE_ENV === 'production') {
        let netlifyUrl = `/.netlify/images?url=${url}`;

        if (width) {
            netlifyUrl += `&width=${width * Math.ceil(window.devicePixelRatio)}`;
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
    usePlaceholder = true,
    blurPlaceholder = true,
    placeholderWidth = 100,
    onLoad,
    className,
}: NetlifyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const fullWidthSrc = convertUrlToNetlifyUrl(originalSrc, width);
    const placeholderSrc = convertUrlToNetlifyUrl(originalSrc, placeholderWidth);

    useLayoutEffect(() => {
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

    const isRenderingFullImage = !usePlaceholder || isLoaded;

    return (
        <img
            width={originalWidth}
            height={originalHeight}
            src={isRenderingFullImage ? fullWidthSrc : placeholderSrc}
            className={merge(
                className,
                isRenderingFullImage || !blurPlaceholder ? 'tw-blur-0' : 'tw-blur-sm',
                'tw-transition',
            )}
            alt={alt}
        />
    );
};
