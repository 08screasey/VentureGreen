'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { NetlifyImg } from '../../../Common/NetlifyImage/NetlifyImage';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { type Album } from '../../../data/albums';
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
                className="tw-mx-auto tw-w-full"
                variants={GALLERY_CONTAINER_VARIANTS}
                initial="hidden"
                animate="show"
            >
                <div className="tw-flex tw-flex-col tw-gap-4 tw-border-b-2 tw-border-white tw-bg-black/90 tw-p-4 tw-text-white">
                    <motion.h2
                        variants={GALLERY_HEADER_VARIANTS}
                        transition={{ type: 'tween' }}
                        className="tw-mx-auto tw-text-center tw-font-lora tw-text-4xl"
                    >
                        {header}
                    </motion.h2>
                    {subheader && (
                        <motion.p
                            variants={GALLERY_HEADER_VARIANTS}
                            transition={{ type: 'tween' }}
                            className="tw-mx-auto tw-mb-4 tw-max-w-[800px] tw-text-center tw-font-lora"
                        >
                            {subheader}
                        </motion.p>
                    )}
                </div>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4">
                    {images.map(({ src, alt, verticalPosition }, i) => (
                        <motion.button
                            key={i}
                            onClick={() => openGallery(i)}
                            aria-label={`Open gallery view for ${alt ?? src}`}
                            className={merge(
                                'tw-relative tw-mx-auto tw-flex tw-w-full tw-items-center tw-border-white tw-bg-white tw-p-5 tw-transition hover:tw-brightness-95 active:tw-brightness-90 sm:tw-aspect-[14/10] sm:tw-p-10',
                                FOCUS_VISIBLE_STYLES,
                                'focus-visible:tw-z-[2]',
                            )}
                            variants={GALLERY_ITEM_VARIANTS}
                            transition={{ type: 'tween', ease: 'easeOut' }}
                        >
                            <NetlifyImg
                                originalSrc={src}
                                alt={alt ?? src}
                                originalWidth={600}
                                lazy
                                verticalPosition={verticalPosition}
                                className="tw-h-full tw-w-full tw-object-cover"
                            />
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </>
    );
};
