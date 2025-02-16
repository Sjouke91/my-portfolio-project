import EditForm from '@/components/EditFrom';
import { PageContainer } from '@/styles/globals';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Admin page',
  description: 'Portfolio of a web developer',
};

export default async function Edit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <PageContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <EditForm id={id} />
      </Suspense>
    </PageContainer>
  );
}
