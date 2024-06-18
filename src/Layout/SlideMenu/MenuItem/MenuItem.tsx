import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';

type MenuItemProps = PropsWithChildren<{
    onClick?: () => void;
    link: string;
}>;

export const MenuItem = ({ onClick, link, children }: MenuItemProps) => (
    <NavLink
        to={link}
        onClick={onClick}
        className={({ isActive }) =>
            merge(
                isActive ? 'tw-font-bold tw-underline' : '',
                'tw-w-full tw-p-6 tw-font-lora tw-text-4xl tw-text-green tw-transition-colors hover:tw-bg-light-grey',
                FOCUS_VISIBLE_STYLES,
            )
        }
    >
        {children}
    </NavLink>
);
