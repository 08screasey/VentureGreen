import { LazyLoadComponent } from 'react-lazy-load-image-component';

import canada2 from '../../../../assets/travel/canada/Athabasca+falls+complete.jpg';
import canada17 from '../../../../assets/travel/canada/Athabasca+falls+sunswet+3.jpg';
import canada18 from '../../../../assets/travel/canada/Goat+Parker+Ridge.jpg';
import canada6 from '../../../../assets/travel/canada/Mandy+panorama+parker+ridge.jpg';
import canada10 from '../../../../assets/travel/canada/PF-new-32.jpg';
import canada11 from '../../../../assets/travel/canada/PF-new-4.jpg';
import canada8 from '../../../../assets/travel/canada/Peyto+Lake+5.jpg';
import canada9 from '../../../../assets/travel/canada/Peyto+Lake.jpg';
import canada12 from '../../../../assets/travel/canada/Pyramid+Mountain.jpg';
import canada1 from '../../../../assets/travel/canada/Untitled Export/canada.jpg';
import canada3 from '../../../../assets/travel/canada/Untitled Export/canada2.jpg';
import canada5 from '../../../../assets/travel/canada/Untitled Export/canada3.jpg';
import canada19 from '../../../../assets/travel/canada/Untitled Export/canada4.jpg';
import canada4 from '../../../../assets/travel/canada/avalanche+jpeg.jpg';
import canada13 from '../../../../assets/travel/canada/reflection+pyramid+1.jpg';
import canada14 from '../../../../assets/travel/canada/snow+2.jpg';
import canada15 from '../../../../assets/travel/canada/snow+4.jpg';
import canada16 from '../../../../assets/travel/canada/snow+7.jpg';
import { type ImageGalleryProps } from '../../../../Pages/Photography/Photography';
import { GalleryLayout } from '../../GalleryLayout/GalleryLayout';

export const Canada = ({ onImageClick }: ImageGalleryProps) => {
    const images = [
        canada1,
        canada2,
        canada3,
        canada4,
        canada5,
        canada6,
        canada8,
        canada9,
        canada10,
        canada11,
        canada12,
        canada13,
        canada14,
        canada15,
        canada16,
        canada17,
        canada18,
        canada19,
    ];

    return (
        <LazyLoadComponent>
            <GalleryLayout onClick={(i) => onImageClick(i, images)} images={images}></GalleryLayout>
        </LazyLoadComponent>
    );
};
