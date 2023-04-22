import { useEffect, useState } from 'react';

export const useThemeDetector = (): 'dark' | 'light' => {
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(getCurrentTheme() ? 'dark' : 'light');

  const mqListener = (e: Event) => {
    if (isMediaQueryListEvent(e)) {
      setSystemTheme(e.matches ? 'dark' : 'light');
    }
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return systemTheme;
};

function isMediaQueryListEvent(event: Event): event is MediaQueryListEvent {
  return 'matches' in event;
}
