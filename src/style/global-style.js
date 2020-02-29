import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* user-select: none; */
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  html {
    /* overflow-y: auto; */
    height: 100%;
  }

  body {
    font-size: 15px;
    height: 100%;
    overflow-x: hidden !important;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    overflow-y: scroll !important;
    cursor: default;
  }

  .home {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .App {
    height: 100%;
    min-height: 100vh;
    /* overflow-y: hidden; */
    /* background: pink; */
  }

  /* Modifiers */
  .--underlined {
    text-decoration: underline;
  }

  .--clickable-text {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .--error {
    color: red;
  }

  .--center-text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    max-width: 250px;
  }
`;

export default GlobalStyle;
