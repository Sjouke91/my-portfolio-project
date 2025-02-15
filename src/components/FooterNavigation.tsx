'use client';
import Link from 'next/link';
import styled from 'styled-components';
import AboutIcon from 'public/icons/about.svg';
import Image from 'next/image';

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
    color: #19191b;
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

export const FooterNavigation: React.FC = () => (
  <Footer>
    <NavList>
      <NavItem>
        <Link href='/about'>
          <Image
            src='/icons/about.svg'
            alt='Search'
            width={28}
            height={28}
            className='absolute left-3 top-1/2 transform -translate-y-1/2'
          />
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/projects'>
          <Image
            src='/icons/projects.svg'
            alt='Projects'
            width={28}
            height={28}
            className='absolute left-3 top-1/2 transform -translate-y-1/2'
          />
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/admin'>
          <Image
            src='/icons/profile.svg'
            alt='Profile'
            width={28}
            height={28}
            className='absolute left-3 top-1/2 transform -translate-y-1/2'
          />
          Admin
        </Link>
      </NavItem>
    </NavList>
  </Footer>
);

export default FooterNavigation;
