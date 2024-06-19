import { CSSProperties, useLayoutEffect, useState } from 'react';

type NetlifyImageProps = {
    originalSrc: string;
    originalWidth?: number;
    originalHeight?: number;
    objectFit?: CSSProperties['objectFit'];
    alt: string;
    width?: number;
    placeholderWidth?: number;
    onLoad?: () => void;
    wrapperPosition?: CSSProperties['position'];
    wrapperClassName?: string;
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
    objectFit,
    wrapperClassName,
    wrapperPosition = 'relative',
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

    const showBlurEffect = !isRenderingFullImage && blurPlaceholder;

    return (
        <div className={wrapperClassName} style={{ position: wrapperPosition, display: 'inline-flex' }}>
            <img
                width={originalWidth}
                height={originalHeight}
                src={isRenderingFullImage ? fullWidthSrc : placeholderSrc}
                className="tw-block tw-max-h-full tw-max-w-full"
                alt={alt}
                style={{ objectFit }}
            />
            {showBlurEffect && (
                <span className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-backdrop-blur-[2px]" />
            )}
        </div>
    );
};
