'use server';
import { Project } from '@/types';
import mockedData from '@/data/projects.json';

export const getProjects = async (): Promise<Project[] | null> => {
  //   const res = await fetch('https://portfolio.free.beeceptor.com/projects', {
  //     cache: 'force-cache',
  //   });

  // const projects: Project[] = await res.json();

  const projects: Project[] = mockedData;

  return projects || null;
};

export const getSingleProject = async ({
  id,
}: {
  id: string;
}): Promise<Project | null> => {
  // Fetch real data (uncomment this when API is available)
  // const res = await fetch('https://portfolio.free.beeceptor.com/projects', { cache: 'force-cache' });
  // const projects: Project[] = await res.json();

  const projects: Project[] = mockedData; // Using mock data for now

  // Find project or return null if not found
  return projects.find((project) => project.id === id) || null;
};

export const updateProject = async ({
  projectId,
}: {
  projectId: string;
}): Promise<Project[]> => {
  return [];
};

export const deleteProject = async ({
  projectId,
}: {
  projectId: string;
}): Promise<Project[]> => {
  return [];
};
