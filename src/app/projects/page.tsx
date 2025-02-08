import { Metadata } from 'next';
import { Project } from '../../types';

export const metadata: Metadata = {
  title: 'Projects page',
  description: 'Portfolio of a web developer',
};

interface ProjectProps {
  projects: Project[];
}

export default async function Projects() {
  const res = await fetch(
    'https://67a767c4203008941f6784ce.mockapi.io/api/v1/project',
    {
      // This tells Next.js to cache the result and use it for SSG.
      cache: 'force-cache',
    }
  );
  const projects: Project[] = await res.json();

  return (
    <div>
      <h1>Projects page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
