import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { PlaceholderImage } from '../../../Common/NetflifyImage/NetlifyImage';
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
                'tw-group/card tw-relative tw-flex tw-h-[550px] tw-flex-none tw-cursor-pointer tw-flex-col tw-justify-end tw-overflow-hidden tw-font-lora tw-text-white',
                FOCUS_VISIBLE_STYLES,
            )}
        >
            <PlaceholderImage
                wrapperClassName="tw-left-0 tw-top-0 tw-h-full tw-w-full group-hover/card:tw-brightness-75 tw-transition"
                originalSrc={coverArt.src}
                objectFit="cover"
                width={800}
                alt=""
                originalHeight={coverArt.height}
                originalWidth={coverArt.width}
                wrapperPosition="absolute"
            />
            <div className="tw-relative tw-z-[2] tw-bg-black/90 tw-py-4 tw-text-center tw-text-4xl tw-transition-all">
                {children}
            </div>
            <div
                className={merge(
                    'tw-absolute tw-left-0 tw-top-0 tw-z-[3] tw-h-full tw-w-full tw-bg-transparent tw-transition-all group-hover/card:tw-shadow-inner group-focus-visible/card:tw-shadow-inner',
                )}
            />
        </NavLink>
    </motion.div>
);
