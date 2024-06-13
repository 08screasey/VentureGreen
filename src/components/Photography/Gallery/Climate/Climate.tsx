import { LazyLoadComponent } from 'react-lazy-load-image-component';

import Climate1 from '../../../../assets/client/Climate/climate.jpg';
import Climate10 from '../../../../assets/client/Climate/climate10.jpg';
import Climate11 from '../../../../assets/client/Climate/climate11.jpg';
import Climate12 from '../../../../assets/client/Climate/climate12.jpg';
import Climate13 from '../../../../assets/client/Climate/climate13.jpg';
import Climate14 from '../../../../assets/client/Climate/climate14.jpg';
import Climate15 from '../../../../assets/client/Climate/climate15.jpg';
import Climate16 from '../../../../assets/client/Climate/climate16.jpg';
import Climate17 from '../../../../assets/client/Climate/climate17.jpg';
import Climate18 from '../../../../assets/client/Climate/climate18.jpg';
import Climate19 from '../../../../assets/client/Climate/climate19.jpg';
import Climate2 from '../../../../assets/client/Climate/climate2.jpg';
import Climate3 from '../../../../assets/client/Climate/climate3.jpg';
import Climate4 from '../../../../assets/client/Climate/climate4.jpg';
import Climate5 from '../../../../assets/client/Climate/climate5.jpg';
import Climate6 from '../../../../assets/client/Climate/climate6.jpg';
import Climate7 from '../../../../assets/client/Climate/climate7.jpg';
import Climate8 from '../../../../assets/client/Climate/climate8.jpg';
import Climate9 from '../../../../assets/client/Climate/climate9.jpg';
import { type ImageGalleryProps } from '../../../../Pages/Photography/Photography';
import { GalleryLayout } from '../../GalleryLayout/GalleryLayout';

export const Climate = ({ onImageClick }: ImageGalleryProps) => {
    const images = [
        Climate1,
        Climate2,
        Climate3,
        Climate4,
        Climate5,
        Climate6,
        Climate7,
        Climate8,
        Climate9,
        Climate10,
        Climate11,
        Climate12,
        Climate13,
        Climate14,
        Climate15,
        Climate16,
        Climate17,
        Climate18,
        Climate19,
    ];
    return (
        <LazyLoadComponent>
            <GalleryLayout
                onClick={(i) => onImageClick(i, images)}
                header="Strike For Climate 2019 - Nelson, BC"
                images={images}
            >
                The September strike for climate, organised mainly by the Friday’s for Future movement, was the largest
                Strike For Climate on record. It saw people of all ages out on the street, pleading for change,
                demanding it. In Nelson, BC an estimated number of 1,500-2,000 (20% of total population) citizens joined
                the march, lead by the youth organisation. With the highest %percentage of attendees Per Capita in
                Canada, Nelson has set its sights on a sustainable future.
            </GalleryLayout>
        </LazyLoadComponent>
    );
};
