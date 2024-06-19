import { CSSProperties, forwardRef, useCallback, useLayoutEffect, useRef, useState } from 'react';

import { merge } from '../../Utility/merge';
import { useIntersectionObserver } from '../../Utility/useIntersectionObserver';

type NetlifyImageProps = {
    originalSrc: string;
    originalWidth?: number;
    originalHeight?: number;
    alt: string;
    width?: number;
    onLoad?: () => void;
    lazy?: boolean;
    className?: string;
};

type PlaceholderImageProps = {
    originalSrc: string;
    originalWidth?: number;
    originalHeight?: number;
    objectFit?: 'cover' | 'contain';
    alt: string;
    width?: number;
    placeholderWidth?: number;
    onLoad?: () => void;
    lazy?: boolean;
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
        let netlifyUrl = `/.netlify/images?url=${encodeURIComponent(url)}`;

        if (width) {
            netlifyUrl += `&width=${width * Math.ceil(window.devicePixelRatio)}`;
        }

        return netlifyUrl;
    } else {
        return url;
    }
};

export const PlaceholderImage = ({
    originalHeight,
    originalSrc,
    originalWidth,
    alt,
    objectFit,
    width,
    usePlaceholder = true,
    blurPlaceholder = true,
    placeholderWidth = 16,
    onLoad,
    lazy = false,
    wrapperClassName,
    wrapperPosition = 'relative',
}: PlaceholderImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);

    const fullWidthSrc = convertUrlToNetlifyUrl(originalSrc, width);

    const observerRef = useRef<HTMLImageElement>(null);
    useIntersectionObserver({
        ref: observerRef,
        onEnter: useCallback(() => {
            setIsInViewport(true);
        }, []),
        bottomOffset: 400,
    });

    useLayoutEffect(() => {
        if (!lazy || isInViewport) {
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
        }
    }, [fullWidthSrc, onLoad, isInViewport, lazy]);

    const isRenderingFullImage = !usePlaceholder || isLoaded;

    const showBlurEffect = !isRenderingFullImage && blurPlaceholder;

    return (
        <div className={wrapperClassName} style={{ position: wrapperPosition, display: 'inline-flex' }}>
            <NetlifyImg
                originalWidth={originalWidth}
                originalHeight={originalHeight}
                width={isRenderingFullImage ? width : placeholderWidth}
                originalSrc={originalSrc}
                className={merge(
                    'tw-block tw-max-h-full tw-max-w-full',
                    objectFit === 'cover' ? 'tw-object-cover' : 'tw-object-contain',
                )}
                alt={alt}
                ref={observerRef}
            />
            {showBlurEffect && (
                <span className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-backdrop-blur-xl" />
            )}
        </div>
    );
};

export const NetlifyImg = forwardRef<HTMLImageElement, NetlifyImageProps>(
    ({ originalSrc, originalWidth, originalHeight, onLoad, alt, width, className }: NetlifyImageProps, ref) => (
        <img
            width={originalWidth}
            height={originalHeight}
            src={convertUrlToNetlifyUrl(originalSrc, width)}
            className={className}
            onLoad={onLoad}
            alt={alt}
            ref={ref}
        />
    ),
);
