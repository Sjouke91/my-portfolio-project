import { ProfileHeader } from '@/components/ProfileHeader';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['100', '300', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable}`}>
        <ProfileHeader />
        {children}
      </body>
    </html>
  );
}
