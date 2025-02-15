import { Metadata } from 'next';
import { getProjects } from '../actions';
import { PageContainer } from '@/styles/globals';
import ProjectLister from '@/components/ProjectLister';

export const metadata: Metadata = {
  title: 'Projects page',
  description: 'Portfolio of a web developer',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <PageContainer>
      <h1>My projects</h1>
      {projects.length > 0 && (
        <ProjectLister projects={projects} displayType='grid' />
      )}
    </PageContainer>
  );
}
