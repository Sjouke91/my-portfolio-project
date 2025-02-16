import { Metadata } from 'next';
import { PageContainer } from '@/styles/globals';
import ProjectLister from '@/components/ProjectLister';
import { getProjects } from '../actions/project';

export const metadata: Metadata = {
  title: 'Projects page',
  description: 'Portfolio of a web developer',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <PageContainer>
      <h1>My projects</h1>
      {projects && <ProjectLister projects={projects} displayType='grid' />}
    </PageContainer>
  );
}
