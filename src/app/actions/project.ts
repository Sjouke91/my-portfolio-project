'use server';
import { Project } from '@/types';
import mockedData from '@/data/projects.json';

export const getProjects = async (): Promise<Project[]> => {
  //   const res = await fetch('https://portfolio.free.beeceptor.com/projects', {
  //     cache: 'force-cache',
  //   });

  // const projects: Project[] = await res.json();
  const projects: Project[] = mockedData;

  return projects;
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
