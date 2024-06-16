import { type PropsWithChildren } from 'react';

export const PhotoGrid = ({ children }: PropsWithChildren) => (
    <div className="tw-w-full tw-flex tw-justify-around tw-flex-wrap tw-gap-4">{children}</div>
);
