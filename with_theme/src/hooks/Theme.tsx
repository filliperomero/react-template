import React, { createContext, useContext, useCallback, useState } from 'react';

import {
  ThemeProvider as ThemeProviderStyled,
  DefaultTheme,
} from 'styled-components';

import defaultStyle from '../styles/themes/default';
import dark from '../styles/themes/dark';

interface IToastContextData {
  theme: DefaultTheme;
  changeTheme(theme: string): void;
}

const ThemeContext = createContext<IToastContextData>({} as IToastContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultStyle);

  const changeTheme = useCallback((themeWanted: string) => {
    switch (themeWanted.toLocaleLowerCase()) {
      case 'dark':
        setTheme(dark);
        break;
      default:
        setTheme(defaultStyle);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
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
