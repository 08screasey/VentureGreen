import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';

import { SLIDE_MENU_ITEM_VARIANTS } from './animation';

type MenuItemProps = PropsWithChildren<{
    onClick?: () => void;
    link: string;
}>;

export const MenuItem = ({ onClick, link, children }: MenuItemProps) => {
    return (
        <motion.div className="tw-w-full" variants={SLIDE_MENU_ITEM_VARIANTS}>
            <NavLink
                to={link}
                onClick={onClick}
                className={({ isActive }) =>
                    merge(
                        isActive ? 'tw-font-bold tw-underline' : '',
                        'hover:tw-bg-extra-light-grey tw-block tw-w-full tw-p-6 tw-px-8 tw-font-lora tw-text-4xl tw-text-green tw-transition-colors active:tw-bg-light-grey',
                        FOCUS_VISIBLE_STYLES,
                    )
                }
            >
                {children}
            </NavLink>
        </motion.div>
    );
};
