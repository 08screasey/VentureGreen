import { LazyLoadComponent } from "react-lazy-load-image-component";

import Cat1 from "../../../../assets/client/CatMotors/cat.jpg";
import Cat10 from "../../../../assets/client/CatMotors/cat10.jpg";
import Cat11 from "../../../../assets/client/CatMotors/cat11.jpg";
import Cat12 from "../../../../assets/client/CatMotors/cat12.jpg";
import Cat13 from "../../../../assets/client/CatMotors/cat13.jpg";
import Cat2 from "../../../../assets/client/CatMotors/cat2.jpg";
import Cat3 from "../../../../assets/client/CatMotors/cat3.jpg";
import Cat4 from "../../../../assets/client/CatMotors/cat4.jpg";
import Cat5 from "../../../../assets/client/CatMotors/cat5.jpg";
import Cat6 from "../../../../assets/client/CatMotors/cat6.jpg";
import Cat7 from "../../../../assets/client/CatMotors/cat7.jpg";
import Cat8 from "../../../../assets/client/CatMotors/cat8.jpg";
import Cat9 from "../../../../assets/client/CatMotors/cat9.jpg";
import { ImageGalleryProps } from "../../../../containers/Photography/Photography";
import { GalleryLayout } from "../../GalleryLayout/GalleryLayout";

export const CatMotors = ({ onImageClick }: ImageGalleryProps) => {
  const images = [
    Cat1,
    Cat2,
    Cat3,
    Cat4,
    Cat5,
    Cat6,
    Cat7,
    Cat8,
    Cat9,
    Cat10,
    Cat11,
    Cat12,
    Cat13,
  ];
  return (
    <LazyLoadComponent>
      <GalleryLayout
        onClick={(i) => onImageClick(i, images)}
        header="Cat Motors"
        images={images}
      >
        Based in Chiang Mai, Cat Motors are a motorbike rental company who were
        set up by travellers with the goal of allowing other travellers easy
        access to explore the beautiful mountain regions surrounding Chiang Mai
        Province. With a primary focus on safety for travellers they spend
        around 30% of profits on bike maintenance alone.
        <strong style={{ display: "block" }}>
          “Created by travellers, for travellers”
        </strong>
      </GalleryLayout>
    </LazyLoadComponent>
  );
};
