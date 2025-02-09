import { PageContainer } from '@/styles/globals';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About page',
  description: 'Portfolio of a web developer',
};

export default function About() {
  return (
    <PageContainer>
      <h1>About page</h1>
    </PageContainer>
  );
}
