import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

type MenuItemProps = PropsWithChildren<{
    onClick: () => void;
    link: string;
}>;

export const MenuItem = ({ onClick, link, children }: MenuItemProps) => (
    <NavLink to={link} onClick={onClick} className={({ isActive }) => (isActive ? 'PaleGreen' : '')}>
        <span className="F-Bodini">{children}</span>
    </NavLink>
);
