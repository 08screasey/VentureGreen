import { LazyLoadComponent } from 'react-lazy-load-image-component';

import portrait1 from '../../../../assets/portrait/portrait.jpg';
import portrait10 from '../../../../assets/portrait/portrait10.jpg';
import portrait11 from '../../../../assets/portrait/portrait11.jpg';
import portrait2 from '../../../../assets/portrait/portrait2.jpg';
import portrait3 from '../../../../assets/portrait/portrait3.jpg';
import portrait4 from '../../../../assets/portrait/portrait4.jpg';
import portrait5 from '../../../../assets/portrait/portrait5.jpg';
import portrait6 from '../../../../assets/portrait/portrait6.jpg';
import portrait7 from '../../../../assets/portrait/portrait7.jpg';
import portrait8 from '../../../../assets/portrait/portrait8.jpg';
import portrait9 from '../../../../assets/portrait/portrait9.jpg';
import { type ImageGalleryProps } from '../../../../Pages/Photography/Photography';
import { GalleryLayout } from '../../GalleryLayout/GalleryLayout';

export const Portrait = ({ onImageClick }: ImageGalleryProps) => {
    const images = [
        portrait1,
        portrait2,
        portrait3,
        portrait4,
        portrait5,
        portrait6,
        portrait7,
        portrait8,
        portrait9,
        portrait10,
        portrait11,
    ];
    return (
        <LazyLoadComponent>
            <GalleryLayout onClick={(i) => onImageClick(i, images)} images={images} />
        </LazyLoadComponent>
    );
};
