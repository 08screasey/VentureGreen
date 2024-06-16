import { type PropsWithChildren } from 'react';

type DevCardLinkProps = PropsWithChildren<{ href: string }>;

export const DevCardLink = ({ children, href }: DevCardLinkProps) => (
    <a
        href={href}
        rel="noopener noreferrer"
        className="tw-font-lora tw-px-3 tw-py-2 tw-border tw-rounded tw-transition-all tw-shadow-md tw-w-[150px] hover:tw-w-[170px] focus-visible:tw-w-[170px] tw-relative tw-text-left tw-group/link"
        target="_blank"
    >
        {children}
        <span className="tw-absolute tw-hidden group-hover/link:tw-inline-block group-focus-visible/link:tw-inline-block tw-w-0 tw-h-0 tw-right-0 tw-top-1/2 tw--translate-y-1/2 tw-border-[10px] tw-border-[transparent] tw-border-l-light-green" />
    </a>
);
