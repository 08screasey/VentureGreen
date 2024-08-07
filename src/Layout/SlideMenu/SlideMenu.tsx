import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';

import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';
import { useClickOutside } from '../../Utility/useClickOutside';
import { useKeypress } from '../../Utility/useKeypress';

import { MenuItem } from './MenuItem/MenuItem';
import { SLIDE_MENU_VARIANTS } from './animation';

type SlideMenuProps = {
    onClose: () => void;
    showMenu: boolean;
};

export const SlideMenu = ({ onClose }: SlideMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useKeypress({ key: 'Escape', callback: onClose });
    useClickOutside({ ref: menuRef, callback: onClose });

    return (
        <ReactFocusLock returnFocus>
            <motion.div
                className={merge(
                    'tw-fixed tw-left-0 tw-top-0 tw-z-[11] tw-h-full tw-w-full tw-max-w-[100vw] tw-bg-white tw-shadow-lg md:tw-max-w-[400px]',
                )}
                variants={SLIDE_MENU_VARIANTS}
                initial="hidden"
                animate="show"
                exit="hidden"
                ref={menuRef}
            >
                <button
                    aria-label="Close menu"
                    className={merge(
                        FOCUS_VISIBLE_STYLES,
                        'tw-absolute tw-bottom-4 tw-left-4 tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-p-2 hover:tw-bg-light-grey',
                    )}
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="tw-text-green" />
                </button>
                <div
                    className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-y-2 tw-text-center"
                    role="navigation"
                >
                    <MenuItem link="/">Home</MenuItem>
                    <MenuItem link="/photography">Photography</MenuItem>
                    <MenuItem link="/development">Development</MenuItem>
                    <MenuItem link="/about">About Me</MenuItem>
                </div>
            </motion.div>
        </ReactFocusLock>
    );
};
