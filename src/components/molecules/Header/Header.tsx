import React from 'react';
import { Link } from 'components/atoms/Link';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineWbSunny, MdOutlineDarkMode } from 'react-icons/md';
import { Logo } from 'components/atoms/Logo/Logo';
import { useTheme } from 'theming/ThemeProvider';

export const Header: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-screen fixed top-0 right-0 mb-10 py-3 px-24 max-sm:px-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-600">
      <Logo />
      <div className="flex items-center gap-6">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="transition-transform will-change-transform hover:scale-105 active:scale-95 text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
        >
          {theme === 'dark' ? <MdOutlineWbSunny fontSize={24} /> : <MdOutlineDarkMode fontSize={24} />}
        </button>
        {/* <Link href="https://github.com/jaikeex" target="_blank" rel="noreferrer">
          <FaGithub fontSize={24} />
        </Link> */}
      </div>
    </header>
  );
};
