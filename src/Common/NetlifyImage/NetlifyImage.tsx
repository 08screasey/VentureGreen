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
        }: NetlifyImageProps,
        ref,
    ) => {
        const imageRef = useForwardedRef(ref);

        useEffect(() => {
            console.log(imageRef.current);
            if (imageRef.current?.complete) {
                console.log('complete');
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
            />
        );
    },
);

NetlifyImg.displayName = 'NetlifyImg';
