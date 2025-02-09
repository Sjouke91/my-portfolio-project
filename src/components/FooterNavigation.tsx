import Link from 'next/link';

export const FooterNavigation: React.FC = () => (
  <footer>
    <ul>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/projects'>Projects</Link>
      </li>
      <li>
        <Link href='/admin'>Admin</Link>
      </li>
    </ul>
  </footer>
);
