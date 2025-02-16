'use client';
import { deleteProject, updateProject } from '@/app/actions/project';
import { Tag } from '@/styles/globals';
import { Project } from '@/types';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  border: 1px solid #eaeaea;
  padding: 16px !important;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  flex: 1;
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

const IconButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  padding: 8px;

  &:hover {
    color: #007bff;
  }
`;

const ProjectListItem: React.FC<Project> = ({
  name,
  description,
  tags,
  id,
}) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`
    );
    if (confirmDelete) {
      await deleteProject({ id });
    }
  };

  return (
    <ListItem>
      <Link href={`/projects/${id}`} passHref>
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

      <IconButtons>
        <Link href={`/projects/${id}`}>
          <IconButton title='View Project'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12Z' />
              <circle cx='12' cy='12' r='3' />
            </svg>
          </IconButton>
        </Link>
        <Link href={`/projects/${id}/edit`}>
          <IconButton title='Edit Project'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M12 20h9' />
              <path d='M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z' />
            </svg>
          </IconButton>
        </Link>
        <IconButton title='Delete Project' onClick={handleDelete}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M3 6h18' />
            <path d='M8 6V4h8v2' />
            <path d='M10 11v6' />
            <path d='M14 11v6' />
            <path d='M4 6l1 14c.1.8.8 1.5 1.7 1.5h10.6c.9 0 1.6-.7 1.7-1.5l1-14' />
          </svg>
        </IconButton>
      </IconButtons>
    </ListItem>
  );
};

export default ProjectListItem;
