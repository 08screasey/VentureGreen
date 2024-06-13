import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade as Hamburger } from 'hamburger-react';
import { type ReactNode, useState } from 'react';

import Logo from '../../assets/venturegreen.png';
import { Navbar } from '../../components/Navigation/Navbar/Navbar';
import { SlideMenu } from '../../components/Navigation/SlideMenu/SlideMenu';
import { Footer } from '../Footer/Footer';
import './Layout.css';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <header>
                <div className="LogoDiv">
                    <img src={Logo} className="Logo" alt="Venture Green Logo" />
                    <p className="F-Lora PaleGreen">Adventure Photography & Web Development</p>
                </div>
                <Navbar>
                    <SlideMenu showMenu={isOpen} handleClick={() => setOpen(false)} />
                    <div style={{ zIndex: '1000' }}>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
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
