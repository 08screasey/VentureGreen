/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
    import { HTMLAttributes } from 'react';

    export default React.Component<HTMLAttributes<HTMLSVGElement>>;
}
