import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade as Hamburger } from 'hamburger-react';
import { type ReactNode, useState, useEffect } from 'react';

import { merge } from '../../Utility/merge';
import { useKeypress } from '../../Utility/useKeypress';
import { Footer } from '../Footer/Footer';
import { SlideMenu } from '../Navigation/SlideMenu/SlideMenu';

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

    useKeypress({ key: 'Escape', enabled: isMenuOpen, callback: () => setIsMenuOpen(false) });

    return (
        <div>
            <header className={merge(!isAtTop && 'tw-shadow-md', 'tw-transition-shadow')}>
                <nav className="tw-flex tw-items-center tw-justify-between tw-px-8 tw-pb-4 tw-pt-6">
                    <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={20} />
                    <h1 className="tw-w-full tw-text-xl tw-mb-0 tw-max-w-[500px] tw-m-auto tw-text-light-green tw-font-lora tw-font-bold">
                        <img src="/venturegreen.png" className="tw-h-[75px] tw-mx-auto" alt="Venture Green Logo" />
                        <div>Adventure Photography & Web Development</div>
                    </h1>
                    <a
                        className="tw-p-4 tw-rounded"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/venturegreenphotography/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <SlideMenu showMenu={isMenuOpen} handleClick={() => setIsMenuOpen(false)} />
                </nav>
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};
