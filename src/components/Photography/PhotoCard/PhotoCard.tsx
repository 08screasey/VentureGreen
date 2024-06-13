import { type ReactNode, useState } from 'react';
import { Waypoint } from 'react-waypoint';

import './PhotoCard.css';

type PhotoCardProps = {
    children: ReactNode;
    onClick: (card: string) => void;
    card: string;
};

export const PhotoCard = ({ card, children, onClick }: PhotoCardProps) => {
    const [inView, setInView] = useState(false);

    const classes = ['PhotoCard', 'F-Bodini'];
    classes.push(card);
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
            <div className={classes.join(' ')} onClick={() => onClick(card)}>
                <p>{children}</p>
            </div>
        </Waypoint>
    );
};
