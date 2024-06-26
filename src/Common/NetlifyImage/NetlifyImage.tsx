import { forwardRef, useEffect } from 'react';

import { convertUrlToNetlifyUrl } from '../../Helpers/convertToNetlifyUrl';
import { useForwardedRef } from '../../Utility/useForwardedRef';

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

export const NetlifyImg = forwardRef<HTMLImageElement, NetlifyImageProps>(
    ({ originalSrc, originalWidth, originalHeight, onLoad, alt, width, className }: NetlifyImageProps, ref) => {
        const imageRef = useForwardedRef(ref);

        useEffect(() => {
            if (imageRef.current?.complete) {
                onLoad?.();
            }
        });

        return (
            <img
                width={originalWidth}
                height={originalHeight}
                src={convertUrlToNetlifyUrl(originalSrc, width)}
                className={className}
                onLoad={onLoad}
                alt={alt}
                ref={imageRef}
            />
        );
    },
);

NetlifyImg.displayName = 'NetlifyImg';
