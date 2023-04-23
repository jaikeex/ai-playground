import { useEffect, useState } from 'react';
import type { Theme } from './ThemeProvider';

const LOCAL_STORAGE_THEME_KEY = 'theme';

type IUseLocalStorageTheme = [Theme, React.Dispatch<React.SetStateAction<Theme>>];

export const useLocalStorageTheme = (): IUseLocalStorageTheme => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return [theme, setTheme];
};
