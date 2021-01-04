import React, { createContext, useContext, useCallback, useState } from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import { themes, ThemeName } from '../styles/themes';

interface IToastContextData {
  theme: ThemeName;
  changeTheme(theme: string): void;
}

const ThemeContext = createContext<IToastContextData>({} as IToastContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>('light');

  const changeTheme = useCallback((themeWanted: string) => {
    switch (themeWanted.toLocaleLowerCase()) {
      case 'dark':
        setTheme('dark');
        break;
      default:
        setTheme('light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

function useTheme(): IToastContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
