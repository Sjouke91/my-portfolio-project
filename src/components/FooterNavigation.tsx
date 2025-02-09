'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.footer`
  background: #f8f9fa;
  padding: 20px;
  text-align: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
`;

const NavItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #0070f3;
    font-size: 16px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #0056b3;
    }

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
  }
`;

const AboutIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path d='M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z' />
    <circle cx='12' cy='10' r='1' />
    <path d='M11 12h2v6h-2z' />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path d='M20 6h-4V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM8 4h8v2H8V4zm12 14H4V8h16v10z' />
  </svg>
);

const AdminIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path d='M12 2a5 5 0 00-5 5v1H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 6V7a3 3 0 016 0v1H9zm7 3H8v7h8v-7z' />
  </svg>
);

export const FooterNavigation: React.FC = () => (
  <Footer>
    <NavList>
      <NavItem>
        <Link href='/about'>
          <AboutIcon />
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/projects'>
          <ProjectsIcon />
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/admin'>
          <AdminIcon />
          Admin
        </Link>
      </NavItem>
    </NavList>
  </Footer>
);

export default FooterNavigation;
