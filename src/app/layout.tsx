import { Metadata } from 'next';

export const metadata: Metadata = {
    description: 'Showcasing both the creative and critical thinking sides of my personality',
    title: "Sam Creasey's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/zkq8euy.css" />
            </head>
            <body>
                <div id="root">{children}</div>
                <script type="module" src="/src/main.tsx"></script>
            </body>
        </html>
    );
}
