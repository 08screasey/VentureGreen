import { useCallback, useRef, useState } from 'react';

import { NetlifyImg } from '../../../Common/NetlifyImage/NetlifyImage';
import { PlaceholderImage } from '../../../Common/PlaceholderImage/PlaceholderImage';
import { merge } from '../../../Utility/merge';
import { useAutoScroll } from '../../../Utility/useAutoScroll';

export const Laptop = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [hasLaptopLoaded, setHasLaptopLoaded] = useState(false);

    const scrollProps = useAutoScroll({ scrollRef, duration: 120000, delay: 2 * 1000 });

    return (
        <div className="tw-relative tw-w-full tw-leading-none">
            <div className="tw-group/screen tw-absolute tw-left-[10%] tw-top-[5.5%] tw-z-[1] tw-h-[74%] tw-w-[80%] tw-overflow-hidden">
                <div
                    className={merge(
                        'tw-peer/inner-screen tw-relative tw-h-full tw-w-full tw-overflow-y-auto tw-scrollbar-none',
                        hasLaptopLoaded ? 'tw-visible' : 'tw-invisible',
                    )}
                    ref={scrollRef}
                    {...scrollProps}
                    tabIndex={0}
                >
                    <PlaceholderImage
                        originalSrc="/home/website.jpg"
                        alt="Mock laptop screen preview showing development project"
                        width={300}
                        originalHeight={2856}
                        originalWidth={800}
                    />
                </div>
                <div className="tw-pointer-events-none tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-bg-white/15 tw-opacity-0 tw-bg-blend-screen tw-transition-all group-hover/screen:tw-opacity-100 peer-focus-visible/inner-screen:tw-opacity-100" />
            </div>
            <NetlifyImg
                originalSrc="/home/edited laptop.png"
                className="tw-pointer-events-none tw-relative tw-z-[2] tw-block tw-w-full tw-drop-shadow-2xl"
                alt="Outer laptop"
                width={450}
                originalWidth={2000}
                originalHeight={1457}
                onLoad={useCallback(() => setHasLaptopLoaded(true), [])}
            />
        </div>
    );
};
