import { useState } from 'react';

import { type Album } from '../../../Pages/Photography/albums';
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
            <div className="tw-mx-auto tw-w-full tw-max-w-[600px] tw-px-1">
                <h2 className="tw-font-lora">{header}</h2>
                <p className="tw-font-lora">{subheader}</p>
                {images.map(({ src, alt }, i) => (
                    <img
                        key={i}
                        className="tw-mx-auto tw-mb-4 tw-w-full tw-cursor-pointer"
                        src={src}
                        alt={alt ?? src}
                        onClick={() => openGallery(i)}
                    />
                ))}
            </div>
        </>
    );
};
