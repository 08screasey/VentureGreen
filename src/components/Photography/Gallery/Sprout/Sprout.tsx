import { LazyLoadComponent } from 'react-lazy-load-image-component';

import sprout1 from '../../../../assets/client/Sprout/sprout.jpg';
import sprout10 from '../../../../assets/client/Sprout/sprout10.jpg';
import sprout11 from '../../../../assets/client/Sprout/sprout11.jpg';
import sprout12 from '../../../../assets/client/Sprout/sprout12.jpg';
import sprout13 from '../../../../assets/client/Sprout/sprout13.jpg';
import sprout14 from '../../../../assets/client/Sprout/sprout14.jpg';
import sprout15 from '../../../../assets/client/Sprout/sprout15.jpg';
import sprout16 from '../../../../assets/client/Sprout/sprout16.jpg';
import sprout17 from '../../../../assets/client/Sprout/sprout17.jpg';
import sprout2 from '../../../../assets/client/Sprout/sprout2.jpg';
import sprout3 from '../../../../assets/client/Sprout/sprout3.jpg';
import sprout4 from '../../../../assets/client/Sprout/sprout4.jpg';
import sprout5 from '../../../../assets/client/Sprout/sprout5.jpg';
import sprout6 from '../../../../assets/client/Sprout/sprout6.jpg';
import sprout7 from '../../../../assets/client/Sprout/sprout7.jpg';
import sprout8 from '../../../../assets/client/Sprout/sprout8.jpg';
import sprout9 from '../../../../assets/client/Sprout/sprout9.jpg';
import { ImageGalleryProps } from '../../../../Pages/Photography/Photography';
import { GalleryLayout } from '../../GalleryLayout/GalleryLayout';

export const Sprout = ({ onImageClick }: ImageGalleryProps) => {
    const images = [
        sprout1,
        sprout2,
        sprout3,
        sprout4,
        sprout5,
        sprout6,
        sprout7,
        sprout8,
        sprout9,
        sprout10,
        sprout11,
        sprout12,
        sprout13,
        sprout14,
        sprout15,
        sprout16,
        sprout17,
    ];

    return (
        <LazyLoadComponent>
            <GalleryLayout onClick={(i) => onImageClick(i, images)} header="Sprout Plant-Based Eatery" images={images}>
                Tucked away on Ward street lies Nelson’s very first vegan eatery. This bright, cosy cafe has you leaving
                satisfied and even healthier than when you walked in. If it’s Poke-bowls or doughnuts you’re after, this
                cafe has it all. With a new breakfast offer to tempt you in for a morning bite, it was time for some
                fresh images to showcase the mouth-watering bowls and wraps down at Sprout. If you’re in Nelson stick
                Wing Wednesday in your calendar, join the community for a bowl of cauliflower wings and a vegan beer or
                three!
            </GalleryLayout>
        </LazyLoadComponent>
    );
};
