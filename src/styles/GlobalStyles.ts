import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    /* line-height: 1.6; */
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};

  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }



  /* Media Queries */
  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }

  @media screen and (max-width: 400px) {
    html {
      font-size: 81.25%; /* 13px */
    }
  }

  @media screen and (max-width: 320px) {
    html {
      font-size: 75%; /* 12px */
    }
  }

  
`;

export default GlobalStyles;