/**  NOTE: These project detail pages should be SSG and prebuild at build time since content on these pages will not change very often */

import { Project } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project detail page',
  description: 'Portfolio of a web developer',
};

export async function generateStaticParams() {
  const res = await fetch(
    'https://67a767c4203008941f6784ce.mockapi.io/api/v1/project',
    {
      //Cache the result and use it for SSG.
      cache: 'force-cache',
    }
  );

  const projects: Project[] = await res.json();

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
  return (
    <div>
      <h1>Project ID: {id}</h1>
    </div>
  );
}
