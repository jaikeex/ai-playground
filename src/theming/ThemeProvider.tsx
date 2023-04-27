import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useThemeDetector } from './useThemeDetector';
import { useLocalStorageTheme } from './useLocalStorageTheme';

export type Theme = 'dark' | 'light';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = React.PropsWithChildren;

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children = null }): JSX.Element => {
  const systemTheme = useThemeDetector();
  const [localTheme, setLocalTheme] = useLocalStorageTheme();
  const [theme, setTheme] = useState<Theme>(localTheme || systemTheme || 'light');

  const handleThemeChange = useCallback(
    (theme: Theme) => {
      setTheme(theme);
      setLocalTheme(theme);
    },
    [setTheme, setLocalTheme]
  );

  const defaultValue = useMemo(() => ({ theme, setTheme: handleThemeChange }), [theme, handleThemeChange]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
