import { PageContainer } from '@/styles/globals';
import { Text, Title } from '@/styles/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About page',
  description: 'Portfolio of a web developer',
};

export default function About() {
  return (
    <PageContainer>
      <Title>About Me</Title>
      <Text size='medium'>
        Hi, I'm a passionate developer who loves building web applications and
        exploring new technologies.
      </Text>
    </PageContainer>
  );
}
