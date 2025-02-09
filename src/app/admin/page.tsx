import { getSession } from '@/lib/login';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Admin page',
  description: 'Portfolio of a web developer',
};

export default async function Admin() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  return (
    <section>
      <h1>Admin page</h1>
    </section>
  );
}
