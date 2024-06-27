'use client';

import Image, { StaticImageData } from 'next/image';
import { forwardRef, useEffect } from 'react';

import { useForwardedRef } from '../../Utility/useForwardedRef';

type NetlifyImageProps = {
    originalSrc: string | StaticImageData;
    originalWidth?: number;
    originalHeight?: number;
    alt: string;
    onLoad?: () => void;
    lazy?: boolean;
    className?: string;
    blur?: boolean;
    priority?: boolean;
    verticalPosition?: number;
};

export const NetlifyImg = forwardRef<HTMLImageElement, NetlifyImageProps>(
    (
        {
            originalSrc,
            originalWidth,
            originalHeight,
            onLoad,
            alt,
            blur = true,
            lazy = true,
            priority = false,
            className,
            verticalPosition = 50,
        }: NetlifyImageProps,
        ref,
    ) => {
        const imageRef = useForwardedRef(ref);

        useEffect(() => {
            if (imageRef.current?.complete) {
                onLoad?.();
            }
        });

        return (
            <Image
                width={originalWidth}
                height={originalHeight}
                src={originalSrc}
                className={className}
                onLoad={onLoad}
                alt={alt}
                placeholder={blur ? 'blur' : 'empty'}
                loading={lazy ? 'lazy' : 'eager'}
                ref={imageRef}
                priority={priority}
                style={{ objectPosition: `50% ${verticalPosition}%` }}
            />
        );
    },
);

NetlifyImg.displayName = 'NetlifyImg';
