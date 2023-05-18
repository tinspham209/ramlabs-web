import './globals.css';
import { Lato } from 'next/font/google';
import { getMetaData } from './utils/metadata';
import ClientOnly from './providers/ClientOnly';
import ToasterProvider from './providers/Toaster';
import { Navbar } from '@components';

const font = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
});
export const metadata = getMetaData({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
        </ClientOnly>
        <Navbar />
        <div className="pb-20 pt-16">{children}</div>
      </body>
    </html>
  );
}
