import { useRef } from 'react';

import laptop from '../../../../public/home/edited laptop.png';
import website from '../../../../public/home/website.webp';
import { NetlifyImg } from '../../../Common/NetlifyImage/NetlifyImage';
import { useAutoScroll } from '../../../Utility/useAutoScroll';

export const Laptop = ({ onLoad }: { onLoad: () => void }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollProps = useAutoScroll({ scrollRef, duration: 120000, delay: 2 * 1000 });

    return (
        <div className="tw-relative tw-w-full tw-leading-none">
            <div className="tw-group/screen tw-absolute tw-left-[10%] tw-top-[5.5%] tw-z-[1] tw-h-[74%] tw-w-[80%] tw-overflow-hidden">
                <div
                    className="tw-peer/inner-screen tw-relative tw-h-full tw-w-full tw-overflow-y-auto tw-scrollbar-none"
                    ref={scrollRef}
                    {...scrollProps}
                    tabIndex={0}
                >
                    <NetlifyImg
                        originalSrc={website}
                        alt="Mock laptop screen preview showing development project"
                        lazy={false}
                        originalWidth={400}
                    />
                </div>
                <div className="tw-pointer-events-none tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-bg-white/15 tw-opacity-0 tw-bg-blend-screen tw-transition-all group-hover/screen:tw-opacity-100 peer-focus-visible/inner-screen:tw-opacity-100" />
            </div>
            <NetlifyImg
                originalSrc={laptop}
                className="tw-pointer-events-none tw-relative tw-z-[2] tw-block tw-w-full tw-drop-shadow-2xl"
                alt="Outer laptop"
                onLoad={onLoad}
                lazy={false}
                blur={false}
                priority
                originalWidth={450}
            />
        </div>
    );
};
