import { type Metadata } from 'next';

import HomeClient from './client';

export const metadata: Metadata = {
    title: "Sam Creasey's Portfolio",
};

export default function HomePage() {
    return <HomeClient />;
}
