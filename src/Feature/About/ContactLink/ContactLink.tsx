import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { FOCUS_VISIBLE_STYLES } from '../../../Utility/focusStyles';
import { merge } from '../../../Utility/merge';

type ContactLinkProps = {
    href: string;
    label: string;
    animationDelay?: string;
    icon: FontAwesomeIconProps['icon'];
};

export const ContactLink = ({ href, label, animationDelay = '0', icon }: ContactLinkProps) => (
    <a
        rel="noopener noreferrer"
        href={href}
        target="_blank"
        className={merge(
            'tw-animate-pulse-green tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-bg-green tw-p-2 tw-text-white',
            FOCUS_VISIBLE_STYLES,
        )}
        aria-label={label}
        style={{ animationDelay }}
    >
        <FontAwesomeIcon icon={icon} size="2x" />
    </a>
);
