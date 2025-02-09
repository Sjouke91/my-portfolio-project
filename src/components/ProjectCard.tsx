'use client';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  border: 1px solid #eaeaea;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const NextImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 8px 0 16px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: #0073e6;
  color: white;
  font-size: 0.875rem;
  padding: 4px 8px;
  border-radius: 8px;
`;

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  image,
  tags,
  id,
}) => {
  return (
    <Card href={`/projects/${id}`}>
      {image && (
        <ImageWrapper>
          <NextImage src={image} alt={name} fill priority />
        </ImageWrapper>
      )}
      <Content>
        {name && <Title>{name}</Title>}
        {description && <Description>{description}</Description>}
        {tags.length > 0 && (
          <TagList>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagList>
        )}
      </Content>
    </Card>
  );
};

export default ProjectCard;
