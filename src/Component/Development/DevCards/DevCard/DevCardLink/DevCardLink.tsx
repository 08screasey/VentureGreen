import { type PropsWithChildren } from 'react';

type DevCardLinkProps = PropsWithChildren<{ href: string }>;

export const DevCardLink = ({ children, href }: DevCardLinkProps) => (
    <a
        href={href}
        rel="noopener noreferrer"
        className="tw-group/link tw-relative tw-w-[150px] tw-rounded tw-border tw-px-3 tw-py-2 tw-text-left tw-font-lora tw-shadow-md tw-transition-all hover:tw-w-[170px] focus-visible:tw-w-[170px]"
        target="_blank"
    >
        {children}
        <span className="tw-absolute tw-right-0 tw-top-1/2 tw-hidden tw-h-0 tw-w-0 tw--translate-y-1/2 tw-border-[10px] tw-border-[transparent] tw-border-l-light-green group-hover/link:tw-inline-block group-focus-visible/link:tw-inline-block" />
    </a>
);
