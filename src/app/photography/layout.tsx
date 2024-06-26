import { type ReactNode } from 'react';

export default function PhotoLayout({ children }: { children: ReactNode }) {
    return (
        <div className="tw-w-full tw-bg-[url('/.netlify/images?url=/backgrounds/berg.jpg&fm=webp')] tw-bg-cover tw-bg-fixed tw-bg-bottom tw-bg-no-repeat tw-py-10 lg:tw-py-0">
            {children}
        </div>
    );
}
