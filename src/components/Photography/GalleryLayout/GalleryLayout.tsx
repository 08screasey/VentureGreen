import { useState } from 'react';
import './GalleryLayout.css';
import { GalleryView } from '../GalleryView/GalleryView';
import { type Album } from '../../../Pages/Photography/albums';

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
        if (!index) {
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
                />
            ) : null}
            <div className="Gallery">
                <h2 className="F-Bodini">{header}</h2>
                <p className="F-OldStandard">{subheader}</p>
                {images.map(({ src, alt }, i) => (
                    <img key={i} src={src} alt={alt ?? src} onClick={() => openGallery(i)} />
                ))}
            </div>
        </>
    );
};
