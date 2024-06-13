import { LazyLoadComponent } from "react-lazy-load-image-component";

import Gem1 from "../../../../assets/client/Gemma/gem1.jpg";
import Gem10 from "../../../../assets/client/Gemma/gem10.jpg";
import Gem11 from "../../../../assets/client/Gemma/gem11.jpg";
import Gem12 from "../../../../assets/client/Gemma/gem12.jpg";
import Gem13 from "../../../../assets/client/Gemma/gem13.jpg";
import Gem14 from "../../../../assets/client/Gemma/gem14.jpg";
import Gem15 from "../../../../assets/client/Gemma/gem15.jpg";
import Gem16 from "../../../../assets/client/Gemma/gem16.jpg";
import Gem17 from "../../../../assets/client/Gemma/gem17.jpg";
import Gem18 from "../../../../assets/client/Gemma/gem18.jpg";
import Gem19 from "../../../../assets/client/Gemma/gem19.jpg";
import Gem2 from "../../../../assets/client/Gemma/gem2.jpg";
import Gem20 from "../../../../assets/client/Gemma/gem20.jpg";
import Gem21 from "../../../../assets/client/Gemma/gem21.jpg";
import Gem22 from "../../../../assets/client/Gemma/gem22.jpg";
import Gem23 from "../../../../assets/client/Gemma/gem23.jpg";
import Gem24 from "../../../../assets/client/Gemma/gem24.jpg";
import Gem25 from "../../../../assets/client/Gemma/gem25.jpg";
import Gem3 from "../../../../assets/client/Gemma/gem3.jpg";
import Gem4 from "../../../../assets/client/Gemma/gem4.jpg";
import Gem5 from "../../../../assets/client/Gemma/gem5.jpg";
import Gem6 from "../../../../assets/client/Gemma/gem6.jpg";
import Gem8 from "../../../../assets/client/Gemma/gem8.jpg";
import Gem9 from "../../../../assets/client/Gemma/gem9.jpg";
import { type ImageGalleryProps } from "../../../../containers/Photography/Photography";
import { GalleryLayout } from "../../GalleryLayout/GalleryLayout";

export const Gemma = ({ onImageClick }: ImageGalleryProps) => {
  const images = [
    Gem1,
    Gem2,
    Gem3,
    Gem4,
    Gem5,
    Gem6,
    Gem8,
    Gem9,
    Gem10,
    Gem11,
    Gem12,
    Gem13,
    Gem14,
    Gem15,
    Gem16,
    Gem17,
    Gem18,
    Gem19,
    Gem20,
    Gem21,
    Gem22,
    Gem23,
    Gem24,
    Gem25,
  ];

  return (
    <LazyLoadComponent>
      <GalleryLayout
        onClick={(i) => onImageClick(i, images)}
        header="Gemma: Aerial"
        images={images}
      >
        Tucked away in an old church building, there are people dancing in the
        shadows. The circus community at Cardiff’s No Fit State houses
        extraordinary talents. The outer structure has retained it’s appearance,
        and a peek through the wooden door shows that the high ceilings in this
        space are being used to their full potential. Whether its hanging from a
        trapeze or hand-standing tall, this place is teeming with strength,
        grace and precision. Gemma is a combination of all 3.
      </GalleryLayout>
    </LazyLoadComponent>
  );
};
