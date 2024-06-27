import { Metadata } from 'next';

import { Layout } from '../Layout/Layout';
import '../index.css';

export const metadata: Metadata = {
    description: 'Showcasing both the creative and critical thinking sides of my personality',
    title: "Sam Creasey's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preload" href="https://use.typekit.net/zkq8euy.css" as="style" />
            </head>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
