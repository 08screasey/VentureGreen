import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { NetlifyImg } from '../../../Common/NetflifyImage/NetlifyImage';
import { merge } from '../../../Utility/merge';

const BASE_IMAGE_CLASS = 'tw-absolute tw-top-0 tw-left-0 tw-transition-all tw-shadow-lg tw-origin-center';

export const PhotoStack = forwardRef<HTMLAnchorElement, { isInView: boolean }>(({ isInView }, ref) => (
    <Link
        className="tw-group/photos tw-relative tw-block tw-outline-none"
        to="/photography"
        ref={ref}
        aria-label="Photography portfolio"
    >
        <NetlifyImg
            className={merge(BASE_IMAGE_CLASS, isInView && '-tw-translate-x-1 -tw-translate-y-1')}
            alt=""
            originalSrc="/home/Home Image 5.jpg"
            width={450}
        />
        <NetlifyImg
            className={merge(
                BASE_IMAGE_CLASS,
                isInView && '-tw-translate-x-0.5 -tw-translate-y-5 tw-rotate-6 tw-delay-100',
            )}
            alt=""
            originalSrc="/home/Home Image 4.jpg"
            width={450}
        />
        <NetlifyImg
            className={merge(BASE_IMAGE_CLASS, isInView && '-tw-translate-x-1 -tw-translate-y-3 -tw-rotate-6')}
            alt=""
            originalSrc="/home/Home Image 3.jpg"
            width={450}
        />
        <NetlifyImg
            className={merge(
                BASE_IMAGE_CLASS,
                isInView && '-tw-translate-x-0.5 tw-translate-y-2.5 tw-rotate-12 tw-delay-100',
            )}
            alt=""
            originalSrc="/home/Home Image 2.jpg"
            width={450}
        />
        <NetlifyImg
            className={merge(
                'tw-relative tw-origin-center tw-shadow-lg tw-transition-all group-hover/photos:tw-scale-105 group-hover/photos:tw-shadow-2xl group-focus-visible/photos:tw-scale-105 group-focus-visible/photos:tw-shadow-2xl',
            )}
            alt=""
            originalSrc="/home/Home Image.jpg"
            width={450}
        />
    </Link>
));
