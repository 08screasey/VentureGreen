import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';

import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';
import { useClickOutside } from '../../Utility/useClickOutside';
import { useKeypress } from '../../Utility/useKeypress';

import { MenuItem } from './MenuItem/MenuItem';

type SlideMenuProps = {
    onClose: () => void;
    showMenu: boolean;
};

export const SlideMenu = ({ onClose }: SlideMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useKeypress({ key: 'Escape', callback: onClose });
    useClickOutside({ ref: menuRef, callback: onClose });

    return (
        <ReactFocusLock>
            <motion.div
                className={merge(
                    'tw-fixed tw-left-0 tw-top-0 tw-z-[11] tw-h-full tw-w-full tw-max-w-[400px] tw-bg-white tw-shadow-lg',
                )}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
                ref={menuRef}
            >
                <button
                    aria-label="Close menu"
                    className={merge(
                        FOCUS_VISIBLE_STYLES,
                        'tw-absolute tw-left-4 tw-top-4 tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded',
                    )}
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faXmark} size="2x" className="tw-text-green" />
                </button>
                <div
                    className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center"
                    aria-role="navigation"
                >
                    <MenuItem link="/">Home</MenuItem>
                    <MenuItem link="/photography">Photography</MenuItem>
                    <MenuItem link="/development">Development</MenuItem>
                    <MenuItem link="/about-me">About Me</MenuItem>
                    <MenuItem link="/contact">Contact</MenuItem>
                </div>
            </motion.div>
        </ReactFocusLock>
    );
};
