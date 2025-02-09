import { FooterNavigation } from '@/components/FooterNavigation';
import { ProfileHeader } from '@/components/ProfileHeader';
import { ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <ProfileHeader />
        {children}
        <FooterNavigation />
      </body>
    </html>
  );
}
