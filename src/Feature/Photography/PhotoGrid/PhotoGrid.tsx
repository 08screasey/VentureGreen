import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

import { PHOTO_GRID_VARIANTS } from './animation';

export const PhotoGrid = ({ children }: PropsWithChildren) => (
    <motion.div
        variants={PHOTO_GRID_VARIANTS}
        initial="hidden"
        animate="show"
        className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-between tw-gap-4 tw-overflow-x-hidden tw-px-10 tw-py-4 lg:tw-flex-row lg:tw-overflow-x-auto"
    >
        {children}
    </motion.div>
);
