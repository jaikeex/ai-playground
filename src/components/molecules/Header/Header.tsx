import React from 'react';
import { Link } from 'components/atoms/Link';
import { FaGithub } from 'react-icons/fa';
import { Logo } from 'components/atoms/Logo/Logo';

export const Header: React.FC = (): JSX.Element => (
  <header className="w-full mb-10 pt-3 px-24 max-sm:px-4 flex justify-between items-center">
    <Logo />
    <Link href="https://github.com/jaikeex" target="_blank" rel="noreferrer">
      <FaGithub fontSize={24} />
    </Link>
  </header>
);
