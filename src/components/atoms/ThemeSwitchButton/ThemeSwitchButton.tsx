import React, { useCallback } from 'react';
import { MdOutlineWbSunny, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from 'theming';

export const ThemeSwitchButton: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const handleClick = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  return (
    <button onClick={handleClick} className="theme_switch_btn">
      {theme === 'dark' ? <MdOutlineWbSunny fontSize={24} /> : <MdOutlineDarkMode fontSize={24} />}
    </button>
  );
};
