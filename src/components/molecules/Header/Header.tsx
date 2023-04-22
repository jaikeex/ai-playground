import React from 'react';
import { Link, Logo, SbIcon, ThemeSwitchButton } from 'components/atoms';
import { FaGithub } from 'react-icons/fa';

export const Header: React.FC = (): JSX.Element => (
  <header className="header">
    <Logo />
    <div className="flex items-center gap-6">
      <ThemeSwitchButton />
      <Link href="https://github.com/jaikeex/ai-playground" target="_blank" rel="noreferrer">
        <FaGithub fontSize={22} />
      </Link>
      <Link href="https://github.com/jaikeex/ai-playground" target="_blank" rel="noreferrer">
        <SbIcon
          width={22}
          height={22}
          className="fill-gray-600 hover:fill-black dark:fill-gray-300 dark:hover:fill-gray-100"
        />
      </Link>
    </div>
  </header>
);
