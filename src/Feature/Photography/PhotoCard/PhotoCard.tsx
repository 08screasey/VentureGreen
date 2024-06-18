import { type ReactNode, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { type Image } from '../../../Pages/Photography/albums';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { useIntersectionObserver } from '../../../Utility/useIntersectionObserver';

type PhotoCardProps = {
    children: ReactNode;
    coverArt: Image;
    link: string;
};

export const PhotoCard = ({ coverArt, children, link }: PhotoCardProps) => {
    const [inView, setInView] = useState(false);

    const linkRef = useRef<HTMLAnchorElement>(null);

    useIntersectionObserver({
        topOffset: 200,
        bottomOffset: 500,
        onEnter: () => setInView(true),
        onLeave: () => setInView(false),
        ref: linkRef,
    });

    return (
        <NavLink
            to={link}
            className={merge(
                'tw-group/card tw-relative tw-flex tw-h-[550px] tw-w-full tw-max-w-[500px] tw-flex-none tw-cursor-pointer tw-flex-col tw-justify-center tw-bg-cover tw-font-lora tw-text-4xl tw-text-white lg:tw-max-w-[400px]',
                FOCUS_VISIBLE_STYLES,
            )}
            style={{ backgroundImage: `url("${coverArt.src}")` }}
            ref={linkRef}
        >
            <div
                className={merge(
                    'tw-absolute tw-left-0 tw-top-0 tw-z-[2] tw-h-full tw-w-full tw-bg-black/80 tw-transition-all group-hover/card:tw-opacity-100 group-focus-visible/card:tw-opacity-100',
                    inView ? 'tw-opacity-60' : 'tw-opacity-0',
                )}
            />
            <div className="group-hover/card:tw-bg-transparent group-focus-visible/card:tw-bg-transparent tw-relative tw-z-[3] tw-bg-black/70 tw-py-4 tw-text-center tw-text-6xl tw-transition-all">
                {children}
            </div>
        </NavLink>
    );
};
