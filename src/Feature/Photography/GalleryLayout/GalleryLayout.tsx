'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { PlaceholderImage } from '../../../Common/PlaceholderImage/PlaceholderImage';
import { type Album } from '../../../data/albums';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { Carousel } from '../Carousel/Carousel';

import { GALLERY_CONTAINER_VARIANTS, GALLERY_HEADER_VARIANTS, GALLERY_ITEM_VARIANTS } from './animations';

type GalleryLayoutProps = {
    album: Album;
};

export const GalleryLayout = ({ album }: GalleryLayoutProps) => {
    const { header, subheader, images } = album;

    const [index, setIndex] = useState<null | number>(null);

    const openGallery = (index: number) => {
        setIndex(index);
    };

    return (
        <>
            {index !== null ? <Carousel startingIndex={index} images={images} onExit={() => setIndex(null)} /> : null}
            <motion.div
                className="tw-mx-auto tw-w-full tw-max-w-[600px] tw-divide-y-2 tw-divide-white tw-px-1 tw-py-1"
                variants={GALLERY_CONTAINER_VARIANTS}
                initial="hidden"
                animate="show"
            >
                <div className="tw-flex tw-flex-col tw-gap-4 tw-bg-black/80 tw-p-4 tw-text-white">
                    <motion.h2
                        variants={GALLERY_HEADER_VARIANTS}
                        transition={{ type: 'tween' }}
                        className="tw-text-center tw-font-lora tw-text-4xl"
                    >
                        {header}
                    </motion.h2>
                    {subheader && (
                        <motion.p
                            variants={GALLERY_HEADER_VARIANTS}
                            transition={{ type: 'tween' }}
                            className="tw-mb-4 tw-text-center tw-font-lora"
                        >
                            {subheader}
                        </motion.p>
                    )}
                </div>
                {images.map(({ src, alt, width, height }, i) => (
                    <motion.button
                        key={i}
                        onClick={() => openGallery(i)}
                        aria-label={`Open gallery view for ${alt ?? src}`}
                        className={merge(
                            'tw-relative tw-mx-auto tw-flex tw-w-full tw-transition hover:tw-brightness-95 active:tw-brightness-90',
                            FOCUS_VISIBLE_STYLES,
                            'focus-visible:tw-z-[2]',
                        )}
                        variants={GALLERY_ITEM_VARIANTS}
                        transition={{ type: 'tween', ease: 'easeOut' }}
                    >
                        <PlaceholderImage
                            wrapperClassName="tw-w-full"
                            originalSrc={src}
                            alt={alt ?? src}
                            width={600}
                            originalWidth={width}
                            originalHeight={height}
                            lazy
                        />
                    </motion.button>
                ))}
            </motion.div>
        </>
    );
};
