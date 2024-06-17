import { useRef } from 'react';

import { useAutoScroll } from '../../../Utility/useAutoScroll';

export const Laptop = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollProps = useAutoScroll({ scrollRef, duration: 120000, delay: 2 * 1000 });

    return (
        <div className="tw-relative tw-leading-none">
            <div className="tw-group/screen tw-absolute tw-left-[44px] tw-top-4 tw-z-[1] tw-h-[245px] tw-w-[366px] tw-overflow-hidden">
                <div
                    className="tw-peer/inner-screen tw-scrollbar-none tw-relative tw-h-full tw-w-full tw-overflow-y-auto"
                    ref={scrollRef}
                    {...scrollProps}
                    tabIndex={0}
                >
                    <img src="/home/website.jpg" className="tw-block tw-w-full" />
                </div>
                <div className="tw-pointer-events-none tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-bg-white/10 tw-opacity-0 tw-bg-blend-screen tw-transition-all group-hover/screen:tw-opacity-100 peer-focus-visible/inner-screen:tw-opacity-100" />
            </div>
            <img
                src="/home/edited laptop.png"
                className="tw-pointer-events-none tw-relative tw-z-[2] tw-w-[450px] tw-drop-shadow-2xl"
            />
        </div>
    );
};
