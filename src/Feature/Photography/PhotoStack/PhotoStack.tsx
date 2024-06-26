import Link from 'next/link';
import { forwardRef } from 'react';

import home2 from '../../../../public/home/Home Image 2.jpg';
import home3 from '../../../../public/home/Home Image 3.jpg';
import home4 from '../../../../public/home/Home Image 4.jpg';
import home5 from '../../../../public/home/Home Image 5.jpg';
import home1 from '../../../../public/home/Home Image.jpg';
import { NetlifyImg } from '../../../Common/NetlifyImage/NetlifyImage';
import { merge } from '../../../Utility/merge';

const BASE_IMAGE_CLASS = 'tw-top-0 tw-left-0 tw-transition-all tw-shadow-lg tw-origin-center tw-w-full tw-absolute';

export const PhotoStack = forwardRef<HTMLAnchorElement, { isInView: boolean; onLoad: () => void }>(
    ({ isInView, onLoad }, ref) => (
        <Link
            className="tw-group/photos tw-relative tw-block tw-aspect-[15/10] tw-w-full tw-outline-none"
            href="/photography"
            ref={ref}
            aria-label="Photography portfolio"
        >
            <NetlifyImg
                className={merge(BASE_IMAGE_CLASS, isInView && '-tw-translate-x-1 -tw-translate-y-1')}
                alt=""
                originalSrc={home5}
                originalWidth={450}
                lazy={false}
            />
            <NetlifyImg
                className={merge(
                    BASE_IMAGE_CLASS,
                    isInView && '-tw-translate-x-0.5 -tw-translate-y-5 tw-rotate-6 tw-delay-100',
                )}
                alt=""
                originalSrc={home4}
                originalWidth={450}
                lazy={false}
            />
            <NetlifyImg
                className={merge(BASE_IMAGE_CLASS, isInView && '-tw-translate-x-1 -tw-translate-y-3 -tw-rotate-6')}
                alt=""
                originalSrc={home3}
                originalWidth={450}
                lazy={false}
            />
            <NetlifyImg
                className={merge(
                    BASE_IMAGE_CLASS,
                    isInView && '-tw-translate-x-0.5 tw-translate-y-2.5 tw-rotate-12 tw-delay-100',
                )}
                alt=""
                originalSrc={home2}
                originalWidth={450}
                lazy={false}
            />
            <NetlifyImg
                className="tw-relative tw-block tw-w-full tw-origin-center tw-shadow-lg tw-transition-all group-hover/photos:tw-scale-105 group-hover/photos:tw-shadow-2xl group-focus-visible/photos:tw-scale-105 group-focus-visible/photos:tw-shadow-2xl"
                alt=""
                originalSrc={home1}
                onLoad={onLoad}
                lazy={false}
                blur={false}
                priority
                originalWidth={450}
            />
        </Link>
    ),
);

PhotoStack.displayName = 'PhotoStack';
