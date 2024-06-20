import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { type PropsWithChildren } from 'react';

import { FOCUS_VISIBLE_STYLES } from '../../../../../Utility/focusStyles';
import { merge } from '../../../../../Utility/merge';

type DevCardLinkProps = PropsWithChildren<{ href: string; icon: FontAwesomeIconProps['icon'] }>;

export const DevCardLink = ({ children, href, icon }: DevCardLinkProps) => (
    <a
        href={href}
        rel="noopener noreferrer"
        className={merge(
            FOCUS_VISIBLE_STYLES,
            'tw-group/link tw-relative tw-flex tw-items-center tw-gap-x-2 tw-rounded tw-border tw-border-grey tw-bg-white tw-py-2 tw-pl-3 tw-pr-6 tw-text-left tw-font-active tw-shadow-md tw-transition-all hover:tw-pr-8 focus-visible:tw-pr-8',
        )}
        target="_blank"
    >
        <FontAwesomeIcon className="tw-text-light-green" icon={icon} size="lg" />
        {children}
        <span className="tw-absolute tw-right-0 tw-top-1/2 tw-h-0 tw-w-0 tw--translate-y-1/2 tw-border-[8px] tw-border-[transparent] tw-border-l-light-green tw-opacity-0 tw-transition-opacity group-hover/link:tw-opacity-100 group-focus-visible/link:tw-opacity-100" />
    </a>
);
