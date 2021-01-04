export const themes = {
  light: {
    primary: '#ffffff',
    black: '#1b1f23',
    'box-shadow': 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    primary: '#1D1D1D',
    black: '#c6c6c6',
    'box-shadow': 'rgba(255, 255, 255, 0.1)',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
