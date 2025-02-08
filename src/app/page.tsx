import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Portfolio of a web developer',
};

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
