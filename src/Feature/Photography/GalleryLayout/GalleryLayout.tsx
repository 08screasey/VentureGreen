import { useState } from 'react';

import { type Album } from '../../../Pages/Photography/albums';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { GalleryView } from '../GalleryView/GalleryView';

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
            <div className="tw-mx-auto tw-w-full tw-max-w-[600px] tw-px-1 tw-py-10">
                <div className="tw-flex tw-flex-col tw-gap-4 tw-bg-black/70 tw-p-4 tw-text-white">
                    <h2 className="tw-text-center tw-font-lora tw-text-4xl">{header}</h2>
                    {subheader && <p className="tw-mb-4 tw-text-center tw-font-lora">{subheader}</p>}
                </div>
                {images.map(({ src, alt }, i) => (
                    <img
                        key={i}
                        className={merge(
                            'tw-relative tw-mx-auto tw-w-full tw-cursor-pointer tw-transition hover:tw-brightness-95 active:tw-brightness-90',
                            FOCUS_VISIBLE_STYLES,
                            'focus-visible:tw-z-[2]',
                        )}
                        src={src}
                        tabIndex={0}
                        alt={alt ?? src}
                        onClick={() => openGallery(i)}
                    />
                ))}
            </div>
        </>
    );
};
