import React from 'react';
import { Link, Logo, ThemeSwitchButton } from 'components/atoms';
import { FaGithub } from 'react-icons/fa';

export const Header: React.FC = (): JSX.Element => (
  <header className="header">
    <Logo />
    <div className="flex items-center gap-6 max-md:gap-0">
      <ThemeSwitchButton />
      <Link href="https://github.com/jaikeex/ai-playground" target="_blank" rel="noreferrer" className="ml-8">
        <FaGithub fontSize={22} />
      </Link>
    </div>
  </header>
);
