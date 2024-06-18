import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { isMatchingSlug } from '../../../Utility/isMatchingSlug';
import { merge } from '../../../Utility/merge';

export const FooterLink = ({ children, to }: PropsWithChildren<{ to: string }>) => {
    const { pathname } = useLocation();

    const isActive = isMatchingSlug(to, pathname);

    return (
        <Link
            to={to}
            className={merge(
                FOCUS_VISIBLE_STYLES,
                'tw-relative tw-rounded tw-p-4 tw-font-lora tw-font-medium tw-text-green',
            )}
        >
            {children}
            {isActive && (
                <motion.div
                    className="tw-absolute tw-bottom-2 tw-left-0 tw-w-full tw-border-b-2 tw-border-b-light-green"
                    layoutId="underline"
                />
            )}
        </Link>
    );
};
