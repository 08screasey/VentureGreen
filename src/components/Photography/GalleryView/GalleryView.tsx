import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GalleryView.css";
import { PropsWithChildren } from "react";

type GalleryViewProps = PropsWithChildren<{
  onExit: () => void;
  onPrev: () => void;
  onNext: () => void;
  imageSrc: string;
}>;

export const GalleryView = ({
  onExit,
  onPrev,
  onNext,
  imageSrc,
}: GalleryViewProps) => (
  <div className="GalleryView">
    <div className="BackDrop" onClick={onExit}></div>
    <img src={imageSrc} alt="" />
    <div className="Prev" onClick={onPrev}>
      <FontAwesomeIcon icon={faAngleLeft} size="3x" />
    </div>
    <div className="Next" onClick={onNext}>
      <FontAwesomeIcon icon={faAngleRight} size="3x" />
    </div>
  </div>
);
