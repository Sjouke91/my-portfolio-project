import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About page',
  description: 'Portfolio of a web developer',
};

export default function About() {
  return (
    <section>
      <h1>About page</h1>
    </section>
  );
}
