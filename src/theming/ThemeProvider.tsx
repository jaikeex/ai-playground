import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useThemeDetector } from './useThemeDetector';

type ThemeContextValue = {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
};

type ThemeProviderProps = React.PropsWithChildren;

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children = null }): JSX.Element => {
  const systemTheme = useThemeDetector();
  const [theme, setTheme] = useState<'dark' | 'light'>(systemTheme);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
