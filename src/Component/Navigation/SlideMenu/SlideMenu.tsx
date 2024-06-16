import { merge } from '../../../Utility/merge';

import { MenuItem } from './MenuItem/MenuItem';

type SlideMenuProps = {
    handleClick: () => void;
    showMenu: boolean;
};

export const SlideMenu = ({ showMenu, handleClick }: SlideMenuProps) => (
    <div
        className={merge(
            'tw-fixed tw-h-full tw-w-full tw-max-w-[400px] tw-top-0 tw-left-0 tw-transition-transform tw-bg-white tw-flex tw-flex-col tw-items-center tw-justify-center tw-z-[5] tw-shadow-lg',
            showMenu ? '' : 'tw-translate-x-[-100%]',
        )}
    >
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
