import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';

type GalleryViewProps = PropsWithChildren<{
    onExit: () => void;
    onPrev: () => void;
    onNext: () => void;
    imageSrc: string;
    alt: string;
}>;

export const GalleryView = ({ onExit, onPrev, onNext, imageSrc, alt }: GalleryViewProps) => (
    <div className="tw-fixed tw-left-0 tw-top-0 tw-z-[100] tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center">
        <div className="tw-fixed tw-left-0 tw-top-0 tw-z-[6] tw-h-full tw-w-full tw-bg-black/50" onClick={onExit}></div>
        <img
            src={imageSrc}
            alt={alt}
            className="tw-z-[100] tw-max-h-[90%] tw-w-[85%] tw-max-w-[1000px] tw-object-contain"
        />
        <div className="tw-fixed tw-left-1 tw-top-[50%] tw-z-[108] tw-cursor-pointer" onClick={onPrev}>
            <FontAwesomeIcon icon={faAngleLeft} size="3x" className="tw-text-white" />
        </div>
        <div className="tw-fixed tw-right-1 tw-top-[50%] tw-z-[109] tw-cursor-pointer" onClick={onNext}>
            <FontAwesomeIcon icon={faAngleRight} size="3x" className="tw-text-white" />
        </div>
    </div>
);
