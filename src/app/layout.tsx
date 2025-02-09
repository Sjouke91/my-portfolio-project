import { FooterNavigation } from '@/components/FooterNavigation';
import { ProfileHeader } from '@/components/ProfileHeader';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';

import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <ProfileHeader />
          {children}
          <FooterNavigation />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
