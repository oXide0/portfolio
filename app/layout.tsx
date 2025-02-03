import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin-ext'],
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: 'Nazarii Korchevskyi',
    description: 'Welcome to my portfolio, showcasing my web development and design skills.',
    keywords: ['Nazarii Korchevskyi', 'personal website', 'portfolio', 'web development'],
    authors: { name: 'Nazarii Korchevskyi', url: 'https://nazarii.korchevskyi.com' },
    openGraph: {
        title: 'Nazarii Korchevskyi - Web Developer',
        description: 'Welcome to my portfolio. Explore my work and skills in web development.',
        url: 'https://nazarii.korchevskyi.com',
        siteName: 'Nazarii Korchevskyi',
        images: [],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${montserrat.className} antialiased`}>{children}</body>
        </html>
    );
}
