import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { isMatchingSlug } from '../../Utility/isMatchingSlug';
import { merge } from '../../Utility/merge';

const FooterLink = ({ children, to }: PropsWithChildren<{ to: string }>) => {
    const { pathname } = useLocation();

    const isActive = isMatchingSlug(to, pathname);

    return (
        <Link
            to={to}
            className={merge(
                FOCUS_VISIBLE_STYLES,
                'tw-relative tw-rounded tw-p-4 tw-font-lora tw-font-medium tw-text-green',
            )}
        >
            {children}
            {isActive && (
                <motion.div
                    className="tw-absolute tw-bottom-2 tw-left-0 tw-w-full tw-border-b-2 tw-border-b-light-green"
                    layoutId="underline"
                />
            )}
        </Link>
    );
};

export const Footer = () => {
    return (
        <footer className="tw-w-100 tw-hidden tw-flex-none tw-py-3 lg:tw-flex">
            <div className="tw-m-auto tw-flex tw-w-[95%] tw-max-w-[1000px] tw-items-center tw-justify-around">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/development">Development</FooterLink>
                <FooterLink to="/photography">Photography</FooterLink>
                <FooterLink to="/about">About me</FooterLink>
            </div>
        </footer>
    );
};
