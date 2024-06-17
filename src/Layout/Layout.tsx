import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';
import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Hamburger } from '../Common/Hamburger/Hamburger';
import { FOCUS_VISIBLE_STYLES } from '../Utility/focusStyles';
import { merge } from '../Utility/merge';

import { Footer } from './Footer/Footer';
import { SlideMenu } from './SlideMenu/SlideMenu';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);

    useEffect(() => {
        const recalculateScrollTop = () => {
            setIsAtTop(window.scrollY === 0);
        };
        window.addEventListener('scroll', recalculateScrollTop);

        return () => {
            window.removeEventListener('scroll', recalculateScrollTop);
        };
    }, []);

    const { pathname } = useLocation();

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        closeMenu();
    }, [pathname, closeMenu]);

    return (
        <div>
            <header
                className={merge(
                    !isAtTop && 'tw-shadow-md',
                    'tw-fixed tw-left-0 tw-top-0 tw-z-[10] tw-w-full tw-bg-white tw-transition-shadow',
                )}
            >
                <nav className="tw-flex tw-items-center tw-justify-between tw-px-8 tw-pb-4 tw-pt-6">
                    <Hamburger onClick={openMenu} label="Open Menu" />
                    <h1 className="tw-m-auto tw-mb-0 tw-flex tw-max-w-[500px] tw-flex-col tw-items-center tw-font-lora tw-text-xl tw-font-bold tw-text-light-green">
                        <Link to="/" className={FOCUS_VISIBLE_STYLES}>
                            <img
                                src="/venturegreen.png"
                                className="tw-mx-auto tw-block tw-h-[75px]"
                                alt="Venture Green Logo"
                            />
                        </Link>
                        <div className="tw-text-center">Adventure Photography & Web Development</div>
                    </h1>
                    <a
                        className={merge('tw-rounded tw-p-4', FOCUS_VISIBLE_STYLES)}
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/venturegreenphotography/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <AnimatePresence>
                        {isMenuOpen && <SlideMenu showMenu={isMenuOpen} onClose={closeMenu} />}
                    </AnimatePresence>
                </nav>
            </header>
            <main className="md:tw-min-h-[90vh] md:tw-pt-[150px]">{children}</main>
            <Footer />
        </div>
    );
};
