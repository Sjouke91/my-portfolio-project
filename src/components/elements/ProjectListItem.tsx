'use client';
import { Tag } from '@/styles/globals';
import { Project } from '@/types';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  border: 1px solid #eaeaea;

  a {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-5px);
  }
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

const ProjectListItem: React.FC<Project> = ({
  name,
  description,
  tags,
  id,
}) => {
  return (
    <ListItem>
      <Link href={`/projects/${id}`}>
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
      </Link>
    </ListItem>
  );
};

export default ProjectListItem;
