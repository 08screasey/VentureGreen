import { LazyLoadComponent } from 'react-lazy-load-image-component';

import Luna1 from '../../../../assets/client/luna/Luna.jpg';
import Luna10 from '../../../../assets/client/luna/Luna10.jpg';
import Luna11 from '../../../../assets/client/luna/Luna11.jpg';
import Luna12 from '../../../../assets/client/luna/Luna12.jpg';
import Luna13 from '../../../../assets/client/luna/Luna13.jpg';
import Luna2 from '../../../../assets/client/luna/Luna2.jpg';
import Luna3 from '../../../../assets/client/luna/Luna3.jpg';
import Luna4 from '../../../../assets/client/luna/Luna4.jpg';
import Luna5 from '../../../../assets/client/luna/Luna5.jpg';
import Luna6 from '../../../../assets/client/luna/Luna6.jpg';
import Luna7 from '../../../../assets/client/luna/Luna7.jpg';
import Luna8 from '../../../../assets/client/luna/Luna8.jpg';
import Luna9 from '../../../../assets/client/luna/Luna9.jpg';
import { ImageGalleryProps } from '../../../../Pages/Photography/Photography';
import { GalleryLayout } from '../../GalleryLayout/GalleryLayout';

export const Luna = ({ onImageClick }: ImageGalleryProps) => {
    const images = [
        Luna1,
        Luna2,
        Luna3,
        Luna4,
        Luna5,
        Luna6,
        Luna6,
        Luna7,
        Luna8,
        Luna9,
        Luna10,
        Luna11,
        Luna12,
        Luna13,
    ];
    return (
        <LazyLoadComponent>
            <GalleryLayout onClick={(i) => onImageClick(i, images)} header="Luna & The Moon" images={images}>
                In the quiet mountain town of Jasper, Alberta Luna & The Moon became more than just an idea. Filled with
                creative motivation, Olivia crafted her ideas into reality, and each one is carefully hand-made with the
                love of an independent artist. These scrunchies and headbands are made with 100% organic materials,
                sourced from within Canada as much as possible. They are a perfect gift for anyone, and great to hold
                your hair in place while you do your morning sun salutations.{' '}
            </GalleryLayout>
        </LazyLoadComponent>
    );
};
