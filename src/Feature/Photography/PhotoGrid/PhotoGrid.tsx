'use client';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

import { PHOTO_GRID_VARIANTS } from './animation';

export const PhotoGrid = ({ children }: PropsWithChildren) => (
    <div className="tw-w-full tw-bg-[url('/.netlify/images?url=/backgrounds/berg.jpg&fm=webp')] tw-bg-cover tw-bg-fixed tw-bg-bottom tw-bg-no-repeat tw-py-10 lg:tw-py-0">
        <motion.div
            variants={PHOTO_GRID_VARIANTS}
            initial="hidden"
            animate="show"
            className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-between tw-gap-4 tw-self-center tw-overflow-x-hidden tw-bg-[url('/.netlify/images?url=/backgrounds/berg.jpg&fm=webp')] tw-bg-cover tw-bg-fixed tw-bg-bottom tw-bg-no-repeat tw-px-10 tw-py-4 lg:tw-flex-row lg:tw-overflow-x-auto"
        >
            {children}
        </motion.div>
    </div>
);
