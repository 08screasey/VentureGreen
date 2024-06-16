import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { merge } from '../../../../Utility/merge';

type MenuItemProps = PropsWithChildren<{
    onClick: () => void;
    link: string;
}>;

export const MenuItem = ({ onClick, link, children }: MenuItemProps) => (
    <NavLink
        to={link}
        onClick={onClick}
        className={({ isActive }) =>
            merge(
                isActive ? 'tw-font-bold' : '',
                'tw-text-green tw-w-full tw-p-6 tw-text-4xl hover:tw-bg-extra-light-green tw-font-lora tw-transition-colors',
            )
        }
    >
        {children}
    </NavLink>
);
