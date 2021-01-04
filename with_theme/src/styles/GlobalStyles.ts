import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: ${props => props.theme.colors.primaryColor};
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    color: ${props => props.theme.colors.black};
    transition: color .2s ease-out;
  }

  ul {
    list-style: none;
  }
`;
