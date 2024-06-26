import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { isMatchingSlug } from '../../../Utility/isMatchingSlug';
import { merge } from '../../../Utility/merge';

import { SLIDE_MENU_ITEM_VARIANTS } from './animation';

type MenuItemProps = PropsWithChildren<{
    onClick?: () => void;
    link: string;
}>;

export const MenuItem = ({ onClick, link, children }: MenuItemProps) => {
    const pathname = usePathname();
    const isActive = isMatchingSlug(link, pathname);

    return (
        <motion.div className="tw-w-full" variants={SLIDE_MENU_ITEM_VARIANTS}>
            <Link
                href={link}
                onClick={onClick}
                className={merge(
                    'tw-block tw-w-full tw-p-6 tw-px-8 tw-font-lora tw-text-4xl tw-text-green tw-transition-colors hover:tw-bg-extra-light-grey active:tw-bg-light-grey',
                    FOCUS_VISIBLE_STYLES,
                    isActive && 'tw-font-bold tw-underline',
                )}
            >
                {children}
            </Link>
        </motion.div>
    );
};
