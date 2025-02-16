/**  NOTE: These project detail pages should be SSG and prebuild at build time since content on these pages will not change very often */

import { getProjects, getSingleProject } from '@/app/actions/project';
import ProjectHero from '@/components/ProjectHero';
import { PageContainer } from '@/styles/globals';
import { Project } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Project detail page',
  description: 'Portfolio of a web developer',
};

export async function generateStaticParams() {
  // const res = await fetch('https://portfolio.free.beeceptor.com/projects', {
  //   cache: 'force-cache',
  // });

  // const projects: Project[] = await res.json();

  const projects: Project[] | null = await getProjects();
  if (!projects) return [];

  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function Projects({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const project: Project | null = await getSingleProject({ id });

  if (!project) return notFound();

  return (
    <PageContainer>
      <ProjectHero project={project} />
    </PageContainer>
  );
}
