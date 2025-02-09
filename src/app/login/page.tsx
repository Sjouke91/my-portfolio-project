import LoginComponent from '@/components/LoginComponent';
import { PageContainer } from '@/styles/globals';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Admin page',
  description: 'Portfolio of a web developer',
};

export default function Login() {
  return (
    <PageContainer>
      <h1>Login page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
      </Suspense>
    </PageContainer>
  );
}
