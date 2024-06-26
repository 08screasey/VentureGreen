import { type Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
    title: "Sam Creasey's Development Portfolio",
};

const DevelopmentClient = dynamic(() => import('./client'), { ssr: false });

export default function DevelopmentPage() {
    return <DevelopmentClient />;
}
