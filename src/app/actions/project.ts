'use server';
import { Project } from '@/types';
import mockedData from '@/data/projects.json';
import { revalidatePath } from 'next/cache';

//todo find better mock api and set up REST routes for CRUD
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
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}): Promise<Project[]> => {
  try {
    // Get form data values
    const updatedProject = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      image: formData.get('image') as string,
      tags: (formData.getAll('tags') as string[]) || [],
    };

    // Fetch projects
    const projects: Project[] = mockedData;

    // Find project by ID
    const projectIndex = projects.findIndex((project) => project.id === id);
    if (projectIndex === -1) {
      throw new Error('Project not found');
    }

    // Update the project
    projects[projectIndex] = { ...projects[projectIndex], ...updatedProject };

    // Todo: revalidate the updated project route

    return projects;
  } catch (error) {
    console.error('Error updating project:', error);
    return [];
  }
};

export const deleteProject = async ({
  id,
}: {
  id: string;
}): Promise<Project[]> => {
  try {
    // Fetch projects
    const projects: Project[] = mockedData;

    // filter out projects that should not be deleted
    const updatedProjects = projects.filter((project) => project.id !== id);

    // If no project was removed, return an error or handle appropriately
    if (updatedProjects.length === projects.length) {
      throw new Error('Project not found');
    }

    // Simulating saving updated projects (Replace with an API request)
    return updatedProjects;
  } catch (error) {
    console.error('Error deleting project:', error);
    return [];
  }
};
