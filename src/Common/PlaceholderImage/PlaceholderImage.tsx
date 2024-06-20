import { type CSSProperties, useRef, useState, useCallback } from 'react';

import { convertUrlToNetlifyUrl } from '../../Helpers/convertToNetlifyUrl';
import { merge } from '../../Utility/merge';
import { useIntersectionObserver } from '../../Utility/useIntersectionObserver';
import { useLoadImage } from '../../Utility/useLoadImage';
import { BlurPlaceholder } from '../BlurPlaceholder/BlurPlaceholder';
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
};

export const PlaceholderImage = ({
    originalHeight,
    originalSrc,
    originalWidth,
    alt,
    objectFit,
    width,
    onLoad,
    lazy = false,
    wrapperClassName,
    wrapperPosition = 'relative',
}: PlaceholderImageProps) => {
    const [isInViewport, setIsInViewport] = useState(false);

    const fullWidthSrc = convertUrlToNetlifyUrl(originalSrc, width);

    const observerRef = useRef<HTMLImageElement>(null);
    useIntersectionObserver({
        ref: observerRef,
        onEnter: useCallback(() => {
            setIsInViewport(true);
        }, []),
        bottomOffset: 1200,
    });

    const { isLoaded } = useLoadImage({ src: fullWidthSrc, enabled: isInViewport || !lazy, onLoad });

    return (
        <div className={wrapperClassName} style={{ position: wrapperPosition, display: 'inline-flex' }}>
            <NetlifyImg
                originalWidth={originalWidth}
                originalHeight={originalHeight}
                width={width}
                placeholder={!isLoaded}
                originalSrc={isInViewport ? originalSrc : ''}
                className={merge(
                    'tw-block tw-max-h-full tw-max-w-full',
                    objectFit === 'cover' ? 'tw-object-cover' : 'tw-object-contain',
                )}
                alt={alt}
                ref={observerRef}
            />
            {!isLoaded && <BlurPlaceholder />}
        </div>
    );
};
