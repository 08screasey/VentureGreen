import { type ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import './PhotoCard.css';
import { type Image } from '../../../Pages/Photography/albums';

type PhotoCardProps = {
    children: ReactNode;
    coverArt: Image;
    link: string;
};

export const PhotoCard = ({ coverArt, children, link }: PhotoCardProps) => {
    const [inView, setInView] = useState(false);

    const classes = ['PhotoCard', 'F-Bodini'];

    if (inView) {
        classes.push('Show');
    }

    return (
        <Waypoint
            onEnter={() => setInView(true)}
            onLeave={() => setInView(false)}
            bottomOffset="500px"
            topOffset="200px"
        >
            <NavLink to={link} className={classes.join(' ')} style={{ backgroundImage: `url(${coverArt})` }}>
                <p>{children}</p>
            </NavLink>
        </Waypoint>
    );
};
