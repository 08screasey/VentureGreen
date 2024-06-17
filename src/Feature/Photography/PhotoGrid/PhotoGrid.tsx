import { type PropsWithChildren } from 'react';

export const PhotoGrid = ({ children }: PropsWithChildren) => (
    <div className="tw-flex tw-w-full tw-flex-wrap tw-justify-around tw-gap-4">{children}</div>
);
