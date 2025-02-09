'use client';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';

interface ProjectListerProps {
  projects: Project[];
}

const ComponentWrapper = styled.div``;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const ProjectLister: React.FC<ProjectListerProps> = ({ projects }) => {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <ComponentWrapper>
      <ListContainer>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ListContainer>
    </ComponentWrapper>
  );
};

export default ProjectLister;
