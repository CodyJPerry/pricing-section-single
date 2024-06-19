import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pricing Section - Single',
  description: 'A single pricing section for marketing pages',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${notoSans.className} w-screen min-h-screen bg-gradient-to-b from-gray-50 to-[#d2d6db]`}
      >
        {children}
      </body>
    </html>
  );
}
