import { ReactElement } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import asia1 from "../../../../assets/travel/asia/asia.jpg";
import asia9 from "../../../../assets/travel/asia/asia9.jpg";
import asia10 from "../../../../assets/travel/asia/asia10.jpg";
import asia11 from "../../../../assets/travel/asia/asia11.jpg";
import asia12 from "../../../../assets/travel/asia/asia12.jpg";
import asia13 from "../../../../assets/travel/asia/asia13.jpg";
import asia14 from "../../../../assets/travel/asia/asia14.jpg";
import asia15 from "../../../../assets/travel/asia/asia15.jpg";
import asia16 from "../../../../assets/travel/asia/asia16.jpg";
import asia18 from "../../../../assets/travel/asia/asia18.jpg";
import asia19 from "../../../../assets/travel/asia/asia19.jpg";
import asia2 from "../../../../assets/travel/asia/asia2.jpg";
import asia20 from "../../../../assets/travel/asia/asia20.jpg";
import asia21 from "../../../../assets/travel/asia/asia21.jpg";
import asia3 from "../../../../assets/travel/asia/asia3.jpg";
import asia4 from "../../../../assets/travel/asia/asia4.jpg";
import asia5 from "../../../../assets/travel/asia/asia5.jpg";
import asia6 from "../../../../assets/travel/asia/asia6.jpg";
import asia7 from "../../../../assets/travel/asia/asia7.jpg";
import asia8 from "../../../../assets/travel/asia/asia8.jpg";
import { ImageGalleryProps } from "../../../../containers/Photography/Photography";
import { GalleryLayout } from "../../GalleryLayout/GalleryLayout";

export const Asia = ({ onImageClick }: ImageGalleryProps): ReactElement => {
  const images = [
    asia1,
    asia2,
    asia3,
    asia4,
    asia5,
    asia6,
    asia7,
    asia8,
    asia9,
    asia10,
    asia11,
    asia12,
    asia13,
    asia14,
    asia15,
    asia16,
    asia18,
    asia19,
    asia20,
    asia21,
  ];

  return (
    <LazyLoadComponent>
      <GalleryLayout onClick={(i) => onImageClick(i, images)} images={images} />
    </LazyLoadComponent>
  );
};
