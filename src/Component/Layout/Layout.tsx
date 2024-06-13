import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade as Hamburger } from 'hamburger-react';
import { type ReactNode, useState, useEffect } from 'react';

import Logo from '../../assets/venturegreen.png';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navigation/Navbar/Navbar';
import { SlideMenu } from '../Navigation/SlideMenu/SlideMenu';

import './Layout.css';

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

    return (
        <div>
            <header className={isAtTop ? '' : 'Scrolling'}>
                <div className="LogoDiv">
                    <img src={Logo} className="Logo" alt="Venture Green Logo" />
                    <p className="F-Lora PaleGreen">Adventure Photography & Web Development</p>
                </div>
                <Navbar>
                    <SlideMenu showMenu={isMenuOpen} handleClick={() => setIsMenuOpen(false)} />
                    <div style={{ zIndex: '1000' }}>
                        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={20} />
                    </div>
                    <a
                        className="IconWrapper"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/venturegreenphotography/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </Navbar>
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};
