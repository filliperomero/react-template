import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme { // eslint-disable-line
    title: string;

    colors: {
      primaryColor: string;
      black: string;
      boxShadow: string;
    };
  }
}
