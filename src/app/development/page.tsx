import { type Metadata } from 'next';

import DevelopmentClient from './client';

export const metadata: Metadata = {
    title: "Sam Creasey's Development Portfolio",
};

export default function DevelopmentPage() {
    return <DevelopmentClient />;
}
