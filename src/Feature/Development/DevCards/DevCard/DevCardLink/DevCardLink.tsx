import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { type PropsWithChildren } from 'react';

import { FOCUS_VISIBLE_STYLES } from '../../../../../Utility/focusStyles';
import { merge } from '../../../../../Utility/merge';

type DevCardLinkProps = PropsWithChildren<{
    href: string;
    icon: FontAwesomeIconProps['icon'];
    padding?: 'sm' | 'md';
    showArrow?: boolean;
}>;

export const DevCardLink = ({ children, href, icon, padding = 'md', showArrow = true }: DevCardLinkProps) => (
    <a
        href={href}
        rel="noopener noreferrer"
        className={merge(
            FOCUS_VISIBLE_STYLES,
            padding === 'md' ? 'tw-px-3 tw-py-2' : 'tw-px-2 tw-py-0',
            showArrow && 'tw-pr-6 hover:tw-pr-8 focus-visible:tw-pr-8',
            'tw-group/link tw-relative tw-flex tw-items-center tw-gap-x-2 tw-rounded tw-border tw-border-grey tw-bg-white tw-text-left tw-font-active tw-shadow-md tw-transition-all',
        )}
        target="_blank"
    >
        <FontAwesomeIcon className="tw-text-light-green" icon={icon} size="lg" />
        {children}
        {showArrow && (
            <span className="tw-absolute tw-right-0 tw-top-1/2 tw-h-0 tw-w-0 tw--translate-y-1/2 tw-border-[8px] tw-border-[transparent] tw-border-l-light-green tw-opacity-0 tw-transition-opacity group-hover/link:tw-opacity-100 group-focus-visible/link:tw-opacity-100" />
        )}
    </a>
);
