import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    min-height: 100vh;
    line-height: 1.15;
    word-break: break-word;
    font-family: 'Lato', sans-serif;
    background-color: rgba(128, 128, 128, 0.168);
  }
`;
