import ProjectLister from '@/components/ProjectLister';
import { getSession } from '@/lib/login';
import { PageContainer } from '@/styles/globals';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getProjects } from '../actions';
import { DynamicText } from '@/styles/typography';

export const metadata: Metadata = {
  title: 'Admin page',
  description: 'Portfolio of a web developer',
};

export default async function Admin() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  const projects = await getProjects();

  return (
    <PageContainer>
      <h1>Admin page</h1>
      {projects ? (
        <ProjectLister projects={projects} />
      ) : (
        <DynamicText size='xlarge'>No projects found</DynamicText>
      )}
    </PageContainer>
  );
}
