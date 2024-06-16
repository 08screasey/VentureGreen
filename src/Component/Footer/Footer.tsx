import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';

const FooterLink = ({ children, to }: PropsWithChildren<{ to: string }>) => (
    <Link
        to={to}
        className={merge(FOCUS_VISIBLE_STYLES, 'tw-rounded tw-p-4 tw-font-lora tw-font-medium tw-text-green')}
    >
        {children}
    </Link>
);

export const Footer = () => (
    <footer className="tw-py-3 tw-w-100 tw-hidden md:tw-flex">
        <div className="tw-flex tw-max-w-[800px] tw-w-[95%] tw-m-auto tw-justify-around tw-items-center">
            <FooterLink to="/development">Development</FooterLink>
            <FooterLink to="/photography">Photography</FooterLink>
            <FooterLink to="/about-me">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
        </div>
    </footer>
);
