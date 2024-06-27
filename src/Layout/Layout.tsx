'use client';

import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode, useState, useEffect, useCallback } from 'react';

import logo from '../../public/venturegreen.png';
import { Hamburger } from '../Common/Hamburger/Hamburger';
import { NetlifyImg } from '../Common/NetlifyImage/NetlifyImage';
import { FOCUS_VISIBLE_STYLES } from '../Utility/focusStyles';
import { merge } from '../Utility/merge';

import { Footer } from './Footer/Footer';
import { SlideMenu } from './SlideMenu/SlideMenu';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const recalculateScrollTop = () => {
            setIsAtTop(window.scrollY === 0);
        };
        window.addEventListener('scroll', recalculateScrollTop);

        return () => {
            window.removeEventListener('scroll', recalculateScrollTop);
        };
    }, []);

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        closeMenu();
    }, [closeMenu, pathname]);

    return (
        <MotionConfig reducedMotion="user">
            <div className="tw-flex tw-min-h-screen tw-w-full tw-flex-col">
                <header
                    className={merge(
                        !isAtTop && 'tw-shadow-md',
                        'tw-fixed tw-left-0 tw-top-0 tw-z-[10] tw-w-full tw-bg-white tw-transition-shadow',
                    )}
                >
                    {/* Desktop Navigation Bar */}
                    <nav className="tw-flex tw-items-center tw-justify-between tw-py-3 lg:tw-px-8 lg:tw-pb-4 lg:tw-pt-6">
                        <Link
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
                        </Link>
                        <h1 className="tw-text-l tw-m-auto tw-mb-0 tw-flex tw-max-w-[500px] tw-flex-col tw-items-center tw-font-lora tw-font-bold tw-text-green lg:tw-text-xl">
                            <Link href="/" className={merge(FOCUS_VISIBLE_STYLES, 'tw-rounded')} aria-label="Home">
                                <NetlifyImg
                                    originalSrc={logo}
                                    className="tw-mx-auto tw-h-[60px] tw-w-auto lg:tw-h-[75px]"
                                    alt="Venture Green Logo"
                                    lazy={false}
                                    blur={false}
                                    priority
                                />
                            </Link>
                            <div className="tw-text-center">Adventure Photography & Web Development</div>
                        </h1>
                        <Link
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
                        </Link>
                    </nav>
                </header>
                <main className="tw-flex tw-w-full tw-flex-auto tw-justify-center tw-pb-[57px] tw-pt-[112px] lg:tw-pb-0 lg:tw-pt-[143px]">
                    {children}
                </main>
                <Footer />

                <AnimatePresence>
                    {isMenuOpen && <SlideMenu showMenu={isMenuOpen} onClose={closeMenu} />}
                </AnimatePresence>

                {/** Mobile Navigation Tray */}
                <nav className="tw-fixed tw-bottom-0 tw-left-0 tw-z-[10] tw-flex tw-w-full tw-items-center tw-justify-between tw-border-t tw-border-t-light-grey tw-bg-white tw-px-4 tw-py-2 lg:tw-hidden">
                    <Hamburger onClick={openMenu} label="Open Menu" />
                    <div className="tw-flex tw-items-center tw-gap-2">
                        <Link
                            className={merge(
                                'tw-flex tw-h-[40px] tw-w-[40px] tw-items-center tw-justify-center tw-rounded tw-p-2 tw-transition',
                                FOCUS_VISIBLE_STYLES,
                                'hover:tw-text-light-green active:tw-text-green',
                            )}
                            rel="noopener noreferrer"
                            aria-label="Github"
                            href="https://www.github.com/08screasey"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </Link>
                        <Link
                            className={merge(
                                'tw-flex tw-h-[40px] tw-w-[40px] tw-items-center tw-justify-center tw-rounded tw-p-2 tw-transition',
                                FOCUS_VISIBLE_STYLES,
                                'hover:tw-text-light-green active:tw-text-green',
                            )}
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/venturegreenphotography/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Link>
                    </div>
                </nav>
            </div>
        </MotionConfig>
    );
};
