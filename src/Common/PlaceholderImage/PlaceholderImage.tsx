import { useRef, useState, useCallback } from 'react';

import { convertUrlToNetlifyUrl } from '../../Helpers/convertToNetlifyUrl';
import { useIntersectionObserver } from '../../Utility/useIntersectionObserver';
import { useLoadImage } from '../../Utility/useLoadImage';
import { NetlifyImg } from '../NetlifyImage/NetlifyImage';

type PlaceholderImageProps = {
    originalSrc: string;
    originalWidth?: number;
    originalHeight?: number;
    objectFit?: 'cover' | 'contain';
    alt: string;
    width?: number;
    onLoad?: () => void;
    lazy?: boolean;
    className?: string;
};

export const PlaceholderImage = ({
    originalHeight,
    originalSrc,
    originalWidth,
    alt,
    className,
    width,
    onLoad,
    lazy = false,
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
        <NetlifyImg
            originalWidth={originalWidth}
            originalHeight={originalHeight}
            width={width}
            placeholder={!isLoaded}
            originalSrc={isInViewport ? originalSrc : ''}
            className={className}
            alt={alt}
            ref={observerRef}
        />
    );
};
