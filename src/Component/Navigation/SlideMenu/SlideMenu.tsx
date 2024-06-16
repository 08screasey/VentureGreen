import { MenuItem } from './MenuItem/MenuItem';
import './SlideMenu.css';

type SlideMenuProps = {
    handleClick: () => void;
    showMenu: boolean;
};

export const SlideMenu = ({ showMenu, handleClick }: SlideMenuProps) => (
    <div className={showMenu ? 'SlideMenu Show' : 'SlideMenu'}>
        {showMenu && (
            <>
                <MenuItem link="/" onClick={handleClick}>
                    Home
                </MenuItem>
                <MenuItem link="/photography" onClick={handleClick}>
                    Photography
                </MenuItem>
                <MenuItem link="/development" onClick={handleClick}>
                    Development
                </MenuItem>
                <MenuItem link="/about-me" onClick={handleClick}>
                    About Me
                </MenuItem>
                <MenuItem link="/contact" onClick={handleClick}>
                    Contact
                </MenuItem>
            </>
        )}
    </div>
);
