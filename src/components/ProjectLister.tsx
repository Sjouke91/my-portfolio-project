'use client';
import { Project } from '@/types';
import styled from 'styled-components';
import ProjectCard from './elements/ProjectCard';
import ProjectListItem from './elements/ProjectListItem';

const DisplayType = {
  Grid: 'grid',
  List: 'list',
} as const;

type DisplayType = 'grid' | 'list';
interface ProjectListerProps {
  projects: Project[];
  displayType: DisplayType;
}

const ComponentWrapper = styled.div``;

interface ContainerProps {
  displaytype?: DisplayType;
}

const ListContainer = styled.ul<ContainerProps>`
  display: grid;
  grid-template-columns: ${({ displaytype }) =>
    displaytype === DisplayType.List
      ? '1fr'
      : 'repeat(auto-fill, minmax(300px, 1fr))'};
  gap: 1rem;
  padding: 0;
  list-style: none;

  li {
    padding: ${({ displaytype }) =>
      displaytype === DisplayType.List ? '0.5rem 0' : '0'};
    border-bottom: ${({ displaytype }) =>
      displaytype === DisplayType.List ? '1px solid #ddd' : 'none'};
  }
`;

const ProjectLister: React.FC<ProjectListerProps> = ({
  projects,
  displayType,
}) => {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <ComponentWrapper>
      <ListContainer displaytype={displayType}>
        {sortedProjects?.length &&
          sortedProjects.map((project) => {
            switch (displayType) {
              case DisplayType.Grid:
                return <ProjectCard key={project.id} {...project} />;

              case DisplayType.List:
                return <ProjectListItem key={project.id} {...project} />;

              default:
                return <ProjectCard key={project.id} {...project} />;
            }
          })}
      </ListContainer>
    </ComponentWrapper>
  );
};

export default ProjectLister;
