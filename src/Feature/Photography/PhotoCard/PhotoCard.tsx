'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';

import { NetlifyImg } from '../../../Common/NetlifyImage/NetlifyImage';
import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';
import { type Image } from '../../../data/albums';

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
        <Link
            href={link}
            className={merge(
                'tw-group/card tw-relative tw-flex tw-h-[550px] tw-flex-none tw-cursor-pointer tw-flex-col tw-justify-start tw-overflow-hidden tw-font-lora tw-text-white',
                FOCUS_VISIBLE_STYLES,
            )}
        >
            <div className="tw-relative tw-z-[2] tw-border-b tw-border-b-white tw-bg-black/90 tw-py-4 tw-text-center tw-text-4xl tw-transition-all">
                {children}
            </div>
            <NetlifyImg
                className="tw-left-0 tw-top-0 tw-h-full tw-w-full tw-object-cover tw-transition group-hover/card:tw-brightness-75"
                originalSrc={coverArt.src}
                originalWidth={450}
                alt=""
            />
            <div className="tw-absolute tw-left-0 tw-top-0 tw-z-[3] tw-h-full tw-w-full tw-bg-transparent tw-transition-all group-hover/card:tw-shadow-inner group-focus-visible/card:tw-shadow-inner" />
        </Link>
    </motion.div>
);
