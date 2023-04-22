import React from 'react';
import { Link } from 'components/atoms/Link';
import { FaGithub, FaRegSun, FaRegMoon } from 'react-icons/fa';
import { Logo } from 'components/atoms/Logo/Logo';
import { useTheme } from 'theming/ThemeProvider';

export const Header: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full mb-10 pt-3 px-24 max-sm:px-4 flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-6">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="transition-transform will-change-transform hover:scale-105 active:scale-95 text-gray-600"
        >
          {theme === 'dark' ? <FaRegSun fontSize={22} /> : <FaRegMoon fontSize={22} />}
        </button>
        <Link href="https://github.com/jaikeex" target="_blank" rel="noreferrer">
          <FaGithub fontSize={24} />
        </Link>
      </div>
    </header>
  );
};
