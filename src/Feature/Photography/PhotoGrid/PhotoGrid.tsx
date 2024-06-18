import { type PropsWithChildren } from 'react';

export const PhotoGrid = ({ children }: PropsWithChildren) => (
    <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-between tw-gap-4 tw-overflow-x-hidden tw-px-10 tw-py-4 lg:tw-flex-row lg:tw-overflow-x-auto">
        {children}
    </div>
);
