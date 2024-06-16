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
    <div className="tw-w-full tw-h-full tw-fixed tw-top-0 tw-left-0 tw-flex tw-justify-center tw-items-center tw-z-[100]">
        <div className="tw-w-full tw-h-full tw-fixed tw-top-0 tw-left-0 tw-bg-black/50 tw-z-[6]" onClick={onExit}></div>
        <img
            src={imageSrc}
            alt={alt}
            className="tw-w-[85%] tw-max-w-[1000px] tw-max-h-[90%] tw-object-contain tw-z-[100]"
        />
        <div className="tw-fixed tw-top-[50%] tw-left-1 tw-z-[108] tw-cursor-pointer" onClick={onPrev}>
            <FontAwesomeIcon icon={faAngleLeft} size="3x" className="tw-text-white" />
        </div>
        <div className="tw-fixed tw-top-[50%] tw-right-1 tw-z-[109] tw-cursor-pointer" onClick={onNext}>
            <FontAwesomeIcon icon={faAngleRight} size="3x" className="tw-text-white" />
        </div>
    </div>
);
