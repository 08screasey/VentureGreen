import { LazyLoadComponent } from 'react-lazy-load-image-component';

import animal1 from '../../../../assets/animals/bird+hand-2.jpg';
import animal2 from '../../../../assets/animals/brad+cliffs+3.jpg';
import animal3 from '../../../../assets/animals/brown+snake-2.jpg';
import animal4 from '../../../../assets/animals/crab+1.jpg';
import animal5 from '../../../../assets/animals/dog+2.jpg';
import animal6 from '../../../../assets/animals/dog+photo+2.jpg';
import animal7 from '../../../../assets/animals/echidna+tassie.jpg';
import animal8 from '../../../../assets/animals/harley+17.jpg';
import animal9 from '../../../../assets/animals/harley+2.jpg';
import animal10 from '../../../../assets/animals/harley+3.jpg';
import animal11 from '../../../../assets/animals/harley+5.jpg';
import animal12 from '../../../../assets/animals/harley+6.jpg';
import animal13 from '../../../../assets/animals/harley+9.jpg';
import animal14 from '../../../../assets/animals/kangaroo.jpg';
import animal15 from '../../../../assets/animals/kookaburah+2.jpg';
import animal16 from '../../../../assets/animals/mbai+pay+7_1.jpg';
import animal17 from '../../../../assets/animals/nam+30.jpg';
import animal18 from '../../../../assets/animals/poppy.jpg';
import animal19 from '../../../../assets/animals/sheep+snowdon+2.jpg';
import animal20 from '../../../../assets/animals/sunset+pen+y+fan+6.jpg';
import animal21 from '../../../../assets/animals/wombat.jpg';
import { ImageGalleryProps } from '../../../../Pages/Photography/Photography';
import { GalleryLayout } from '../../GalleryLayout/GalleryLayout';

export const Animals = ({ onImageClick }: ImageGalleryProps) => {
    const images = [
        animal1,
        animal2,
        animal3,
        animal4,
        animal5,
        animal6,
        animal7,
        animal8,
        animal9,
        animal10,
        animal11,
        animal12,
        animal13,
        animal14,
        animal15,
        animal16,
        animal17,
        animal18,
        animal19,
        animal20,
        animal21,
    ];
    return (
        <LazyLoadComponent>
            <GalleryLayout onClick={(i) => onImageClick(i, images)} images={images}></GalleryLayout>
        </LazyLoadComponent>
    );
};
