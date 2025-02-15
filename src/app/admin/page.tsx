import { PageContainer } from '@/styles/globals';
import { Metadata } from 'next';
import { getProjects } from '../actions';
import { Text, Title } from '@/styles/typography';
import ProjectLister from '@/components/ProjectLister';

export const metadata: Metadata = {
  title: 'Admin page',
  description: 'Portfolio of a web developer',
};

export default async function Admin() {
  const projects = await getProjects();

  return (
    <PageContainer>
      <Title>My active projects:</Title>
      {projects ? (
        <ProjectLister projects={projects} displayType='list' />
      ) : (
        <Text size='xlarge'>No projects found</Text>
      )}
    </PageContainer>
  );
}
