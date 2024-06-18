import { motion } from 'framer-motion';
import { useState } from 'react';

import { type Album } from '../../../Pages/Photography/albums';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { GalleryView } from '../GalleryView/GalleryView';

import { GALLERY_CONTAINER_VARIANTS, GALLERY_ITEM_VARIANTS } from './animations';

type GalleryLayoutProps = {
    album: Album;
};

export const GalleryLayout = ({ album }: GalleryLayoutProps) => {
    const { header, subheader, images } = album;

    const [index, setIndex] = useState<null | number>(null);

    const openGallery = (index: number) => {
        setIndex(index);
    };
    const closeGallery = () => {
        setIndex(null);
    };

    const moveGallery = (num: number) => {
        if (index === null) {
            return;
        }
        const newIndex = (index + num + images.length) % images.length;
        setIndex(newIndex);
    };

    return (
        <>
            {index !== null ? (
                <GalleryView
                    imageSrc={images[index].src}
                    onNext={() => moveGallery(+1)}
                    onPrev={() => moveGallery(-1)}
                    onExit={closeGallery}
                    alt={images[index].alt ?? ''}
                />
            ) : null}
            <motion.div
                className="tw-mx-auto tw-w-full tw-max-w-[600px] tw-px-1 tw-py-10"
                variants={GALLERY_CONTAINER_VARIANTS}
                initial="hidden"
                animate="show"
            >
                <div className="tw-mb-2 tw-flex tw-flex-col tw-gap-4 tw-bg-black/70 tw-p-4 tw-text-white">
                    <motion.h2
                        variants={GALLERY_ITEM_VARIANTS}
                        transition={{ type: 'tween' }}
                        className="tw-text-center tw-font-lora tw-text-4xl"
                    >
                        {header}
                    </motion.h2>
                    {subheader && (
                        <motion.p
                            variants={GALLERY_ITEM_VARIANTS}
                            transition={{ type: 'tween' }}
                            className="tw-mb-4 tw-text-center tw-font-lora"
                        >
                            {subheader}
                        </motion.p>
                    )}
                </div>
                {images.map(({ src, alt }, i) => (
                    <motion.button
                        key={i}
                        onClick={() => openGallery(i)}
                        aria-label={`Open gallery view for ${alt ?? src}`}
                        className={merge(
                            'tw-relative tw-mx-auto tw-mb-2 tw-block tw-w-full hover:tw-brightness-95 active:tw-brightness-90',
                            FOCUS_VISIBLE_STYLES,
                            'focus-visible:tw-z-[2]',
                        )}
                        variants={GALLERY_ITEM_VARIANTS}
                        transition={{ type: 'tween' }}
                    >
                        <img className="tw-w-full" src={src} alt={alt ?? src} />
                    </motion.button>
                ))}
            </motion.div>
        </>
    );
};
