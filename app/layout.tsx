import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fambalker.net'),
  title: { default: 'fBit — Digital products, built with purpose.', template: '%s | fBit' },
  description: 'Discover apps, websites and smart-home integrations built by fBit.',
  applicationName: 'fBit',
  openGraph: { title: 'fBit — Digital products, built with purpose.', description: 'Discover apps, websites and smart-home integrations built by fBit.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
