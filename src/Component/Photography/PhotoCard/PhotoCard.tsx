import { type ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import { type Image } from '../../../Pages/Photography/albums';
import { merge } from '../../../Utility/merge';

type PhotoCardProps = {
    children: ReactNode;
    coverArt: Image;
    link: string;
};

export const PhotoCard = ({ coverArt, children, link }: PhotoCardProps) => {
    const [inView, setInView] = useState(false);

    return (
        <Waypoint
            onEnter={() => setInView(true)}
            onLeave={() => setInView(false)}
            bottomOffset="500px"
            topOffset="200px"
        >
            <NavLink
                to={link}
                className={merge(
                    'tw-w-full tw-max-w-[400px] tw-h-[550px] tw-flex tw-flex-col tw-justify-center tw-text-white tw-cursor-pointer tw-relative tw-z-[1] tw-bg-cover',
                )}
                style={{ backgroundImage: `url("${coverArt.src}")` }}
            >
                <div
                    className={merge(
                        'tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-z-[2] tw-transition-opacity tw-bg-black/50',
                        inView ? 'tw-opacity-100' : 'tw-opacity-0',
                    )}
                />
                <h3>{children}</h3>
            </NavLink>
        </Waypoint>
    );
};
