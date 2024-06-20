import { forwardRef } from 'react';

import { convertUrlToNetlifyUrl } from '../../Helpers/convertToNetlifyUrl';

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
