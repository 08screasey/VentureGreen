import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';
import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Hamburger } from '../Common/Hamburger/Hamburger';
import { NetlifyImg } from '../Common/NetflifyImage/NetlifyImage';
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
        <div className="tw-flex tw-min-h-screen tw-w-full tw-flex-col">
            <header
                className={merge(
                    !isAtTop && 'tw-shadow-md',
                    'tw-fixed tw-left-0 tw-top-0 tw-z-[10] tw-w-full tw-bg-white tw-transition-shadow',
                )}
            >
                {/* Desktop Navigation Bar */}
                <nav className="tw-flex tw-items-center tw-justify-between tw-px-8 tw-py-3 lg:tw-pb-4 lg:tw-pt-6">
                    <a
                        className={merge(
                            'tw-hidden tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-rounded tw-p-2 tw-transition lg:tw-flex',
                            FOCUS_VISIBLE_STYLES,
                            'hover:tw-text-light-green active:tw-text-green',
                        )}
                        rel="noopener noreferrer"
                        aria-label="Github"
                        href="https://www.github.com/08screasey"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <h1 className="tw-text-l tw-m-auto tw-mb-0 tw-flex tw-max-w-[500px] tw-flex-col tw-items-center tw-font-lora tw-font-bold tw-text-green lg:tw-text-xl">
                        <Link to="/" className={merge(FOCUS_VISIBLE_STYLES, 'tw-rounded')} aria-label="Home">
                            <NetlifyImg
                                originalSrc="/venturegreen.png"
                                wrapperClassName="tw-mx-auto tw-h-[60px] lg:tw-h-[75px]"
                                objectFit="contain"
                                alt="Venture Green Logo"
                                width={300}
                                originalHeight={376}
                                originalWidth={1500}
                            />
                        </Link>
                        <div className="tw-text-center">Adventure Photography & Web Development</div>
                    </h1>
                    <a
                        className={merge(
                            'tw-hidden tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-rounded tw-p-2 tw-transition lg:tw-flex',
                            FOCUS_VISIBLE_STYLES,
                            'hover:tw-text-light-green active:tw-text-green',
                        )}
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        href="https://www.instagram.com/venturegreenphotography/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </nav>
            </header>
            <main className="tw-flex tw-w-full tw-flex-auto tw-justify-center tw-pb-[67px] tw-pt-[112px] lg:tw-pb-0 lg:tw-pt-[143px]">
                {children}
            </main>
            <Footer />

            <AnimatePresence>{isMenuOpen && <SlideMenu showMenu={isMenuOpen} onClose={closeMenu} />}</AnimatePresence>

            {/** Mobile Navigation Tray */}
            <nav className="tw-fixed tw-bottom-0 tw-left-0 tw-z-[10] tw-flex tw-w-full tw-items-center tw-justify-between tw-border-t tw-border-t-light-grey tw-bg-white tw-px-4 tw-py-2 lg:tw-hidden">
                <Hamburger onClick={openMenu} label="Open Menu" />
                <div className="tw-flex tw-items-center tw-gap-2">
                    <a
                        className={merge(
                            'tw-flex tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-rounded tw-p-2 tw-transition',
                            FOCUS_VISIBLE_STYLES,
                            'hover:tw-text-light-green active:tw-text-green',
                        )}
                        rel="noopener noreferrer"
                        aria-label="Github"
                        href="https://www.github.com/08screasey"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        className={merge(
                            'tw-flex tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-rounded tw-p-2 tw-transition',
                            FOCUS_VISIBLE_STYLES,
                            'hover:tw-text-light-green active:tw-text-green',
                        )}
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/venturegreenphotography/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </nav>
        </div>
    );
};
