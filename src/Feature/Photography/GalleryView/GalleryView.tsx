import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import ReactFocusLock from 'react-focus-lock';

import { NetlifyImg } from '../../../Common/NetflifyImage/NetlifyImage';
import { type Image } from '../../../Pages/Photography/albums';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { useKeypress } from '../../../Utility/useKeypress';

type GalleryViewProps = PropsWithChildren<{
    onExit: () => void;
    onPrev: () => void;
    onNext: () => void;
    image: Image;
}>;

export const GalleryView = ({ onExit, onPrev, onNext, image }: GalleryViewProps) => {
    useKeypress({ key: 'Escape', callback: onExit });

    const { src, alt, width, height } = image;

    return (
        <ReactFocusLock returnFocus>
            <div className="tw-fixed tw-left-0 tw-top-0 tw-z-[100] tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center">
                <div
                    className="tw-fixed tw-left-0 tw-top-0 tw-z-[6] tw-h-full tw-w-full tw-bg-black/70"
                    onClick={onExit}
                />
                <NetlifyImg
                    originalSrc={src}
                    alt={alt ?? ''}
                    originalWidth={width}
                    originalHeight={height}
                    objectFit="contain"
                    wrapperClassName="tw-z-[100] tw-max-h-[90%] tw-w-[85%] tw-max-w-[1000px]"
                />
                <button
                    className={merge(
                        'tw-fixed tw-left-3 tw-top-[50%] tw-z-[108] tw-cursor-pointer tw-rounded tw-transition hover:tw-scale-105 focus-visible:tw-scale-105',
                        FOCUS_VISIBLE_STYLES,
                    )}
                    onClick={onPrev}
                    aria-label="Move to previous image"
                >
                    <FontAwesomeIcon icon={faAngleLeft} size="3x" className="tw-text-white" />
                </button>
                <button
                    className={merge(
                        'tw-fixed tw-right-3 tw-top-[50%] tw-z-[109] tw-cursor-pointer tw-rounded tw-transition hover:tw-scale-105 focus-visible:tw-scale-105',
                        FOCUS_VISIBLE_STYLES,
                    )}
                    onClick={onNext}
                    aria-label="Move to next image"
                >
                    <FontAwesomeIcon icon={faAngleRight} size="3x" className="tw-text-white" />
                </button>
            </div>
        </ReactFocusLock>
    );
};
