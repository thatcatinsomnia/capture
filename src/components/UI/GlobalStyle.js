import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: sans-serif;
    background: #1b1b1b;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.8;
  }
`;

export default GlobalStyle;