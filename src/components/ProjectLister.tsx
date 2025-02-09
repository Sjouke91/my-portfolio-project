'use client';
import { Project } from '@/types';
import React, { useEffect } from 'react';

interface ProjectListerProps {
  projects: Project[];
}

const ProjectLister: React.FC<ProjectListerProps> = ({ projects }) => {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {sortedProjects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLister;
