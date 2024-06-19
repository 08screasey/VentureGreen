import { type CSSProperties, useLayoutEffect, useRef, useState, useCallback } from 'react';

import { convertUrlToNetlifyUrl } from '../../Helpers/convertToNetlifyUrl';
import { loadImageSrc } from '../../Utility/loadImageSrc';
import { merge } from '../../Utility/merge';
import { useIntersectionObserver } from '../../Utility/useIntersectionObserver';
import { NetlifyImg } from '../NetlifyImage/NetlifyImage';

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
