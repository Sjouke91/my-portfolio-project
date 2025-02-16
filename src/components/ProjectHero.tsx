'use client';
import { Tag } from '@/styles/globals';
import { Title } from '@/styles/typography';
import { Project } from '@/types';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 12px;
  position: relative;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 12px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.82);
  padding: 24px;
  z-index: 10;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #888;
`;

// Helper function to format date
const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp) * 1000);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Project Hero Component
const ProjectHero: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <HeroContainer>
      {project?.image && (
        <StyledImage src={project.image} alt={project.name} fill priority />
      )}
      <Content>
        {project?.name && <Title>{project.name}</Title>}
        {project.tags.length > 0 && (
          <TagsContainer>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer>
        )}
        {project?.createdAt && (
          <DateText>Created on: {formatDate(project.createdAt)}</DateText>
        )}
      </Content>
    </HeroContainer>
  );
};

export default ProjectHero;
