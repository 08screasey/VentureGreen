'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../../App').then((module) => module.AppWithRouter), { ssr: false });

export function ClientOnly() {
    return <App />;
}
