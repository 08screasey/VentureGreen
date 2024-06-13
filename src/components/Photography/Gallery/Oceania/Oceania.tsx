import { LazyLoadComponent } from "react-lazy-load-image-component";

import oceania1 from "../../../../assets/travel/oceania/oceania.jpg";
import oceania10 from "../../../../assets/travel/oceania/oceania10.jpg";
import oceania11 from "../../../../assets/travel/oceania/oceania11.jpg";
import oceania12 from "../../../../assets/travel/oceania/oceania12.jpg";
import oceania13 from "../../../../assets/travel/oceania/oceania13.jpg";
import oceania14 from "../../../../assets/travel/oceania/oceania14.jpg";
import oceania15 from "../../../../assets/travel/oceania/oceania15.jpg";
import oceania16 from "../../../../assets/travel/oceania/oceania16.jpg";
import oceania17 from "../../../../assets/travel/oceania/oceania17.jpg";
import oceania18 from "../../../../assets/travel/oceania/oceania18.jpg";
import oceania19 from "../../../../assets/travel/oceania/oceania19.jpg";
import oceania2 from "../../../../assets/travel/oceania/oceania2.jpg";
import oceania20 from "../../../../assets/travel/oceania/oceania20.jpg";
import oceania21 from "../../../../assets/travel/oceania/oceania21.jpg";
import oceania22 from "../../../../assets/travel/oceania/oceania22.jpg";
import oceania23 from "../../../../assets/travel/oceania/oceania23.jpg";
import oceania24 from "../../../../assets/travel/oceania/oceania24.jpg";
import oceania25 from "../../../../assets/travel/oceania/oceania25.jpg";
import oceania26 from "../../../../assets/travel/oceania/oceania26.jpg";
import oceania27 from "../../../../assets/travel/oceania/oceania27.jpg";
import oceania28 from "../../../../assets/travel/oceania/oceania28.jpg";
import oceania3 from "../../../../assets/travel/oceania/oceania3.jpg";
import oceania4 from "../../../../assets/travel/oceania/oceania4.jpg";
import oceania5 from "../../../../assets/travel/oceania/oceania5.jpg";
import oceania6 from "../../../../assets/travel/oceania/oceania6.jpg";
import oceania7 from "../../../../assets/travel/oceania/oceania7.jpg";
import oceania8 from "../../../../assets/travel/oceania/oceania8.jpg";
import oceania9 from "../../../../assets/travel/oceania/oceania9.jpg";
import { ImageGalleryProps } from "../../../../containers/Photography/Photography";
import { GalleryLayout } from "../../GalleryLayout/GalleryLayout";

export const Oceania = ({ onImageClick }: ImageGalleryProps) => {
  const images = [
    oceania1,
    oceania2,
    oceania3,
    oceania4,
    oceania5,
    oceania6,
    oceania7,
    oceania8,
    oceania9,
    oceania10,
    oceania11,
    oceania12,
    oceania13,
    oceania14,
    oceania15,
    oceania16,
    oceania17,
    oceania18,
    oceania19,
    oceania20,
    oceania21,
    oceania22,
    oceania23,
    oceania24,
    oceania25,
    oceania26,
    oceania27,
    oceania28,
  ];

  return (
    <LazyLoadComponent>
      <GalleryLayout onClick={(i) => onImageClick(i, images)} images={images} />
    </LazyLoadComponent>
  );
};
