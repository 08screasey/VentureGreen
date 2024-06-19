import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { NetlifyImg } from '../../../Common/NetflifyImage/NetlifyImage';
import { type Image } from '../../../Pages/Photography/albums';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';

import { PHOTO_CARD_VARIANTS } from './animation';

type PhotoCardProps = {
    children: ReactNode;
    coverArt: Image;
    link: string;
};

export const PhotoCard = ({ coverArt, children, link }: PhotoCardProps) => (
    <motion.div
        variants={PHOTO_CARD_VARIANTS}
        transition={{ type: 'tween' }}
        className="tw-w-full tw-min-w-[350px] tw-max-w-[450px] lg:tw-max-w-[400px]"
    >
        <NavLink
            to={link}
            className={merge(
                'tw-group/card tw-relative tw-flex tw-h-[550px] tw-flex-none tw-cursor-pointer tw-flex-col tw-justify-center tw-overflow-hidden tw-font-lora tw-text-4xl tw-text-white',
                FOCUS_VISIBLE_STYLES,
            )}
        >
            <NetlifyImg
                className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-object-cover"
                originalSrc={coverArt.src}
                width={1200}
                alt=""
            />
            <div
                className={merge(
                    'tw-absolute tw-left-0 tw-top-0 tw-z-[2] tw-h-full tw-w-full tw-bg-black/80 tw-opacity-60 tw-transition-all group-hover/card:tw-opacity-100 group-focus-visible/card:tw-opacity-100',
                )}
            />
            <div className="tw-relative tw-z-[3] tw-bg-black/70 tw-py-4 tw-text-center tw-text-6xl tw-transition-all group-hover/card:tw-bg-transparent group-focus-visible/card:tw-bg-transparent">
                {children}
            </div>
        </NavLink>
    </motion.div>
);
