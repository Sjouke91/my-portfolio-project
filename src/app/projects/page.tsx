import { Metadata } from 'next';
import { Project } from '../../types';
import ProjectLister from '@/components/ProjectLister';

export const metadata: Metadata = {
  title: 'Projects page',
  description: 'Portfolio of a web developer',
};

export default async function Projects() {
  const res = await fetch('https://portfolio.free.beeceptor.com/projects', {
    // This tells Next.js to cache the result and use it for SSG.
    cache: 'force-cache',
  });
  const projects: Project[] = await res.json();

  return (
    <section>
      <h1>Projects page</h1>
      <ProjectLister projects={projects} />
    </section>
  );
}
