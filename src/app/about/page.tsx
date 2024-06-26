import { type Metadata } from 'next';

import AboutClient from './client';

export const metadata: Metadata = { title: "Sam Creasey's Portfolio" };

export default function AboutPage() {
    return <AboutClient />;
}
