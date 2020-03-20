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

  * {
    font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    margin: 0 auto;
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

  .placeholder {
    margin-top: 32px;
    width: 100%;
    height: 320px;
    border-radius: 16px;
    background: ${({ theme }) => theme.palette.primary.main};
    opacity: 10%;
    &:nth-of-type(2) {
      height: 160px;
    }
    &:nth-of-type(3) {
      height: 240px;
    }
    &:nth-of-type(4) {
      height: 360px;
    }
    &:nth-of-type(5) {
      height: 480px;
    }
    &:nth-of-type(6) {
      height: 180px;
    }
    &:nth-of-type(7) {
      height: 240px;
    }
    &:last-of-type {
      margin-bottom: 360px;
    }
  }

  .search-placeholder {
    background: ${({ theme }) => theme.palette.grey[100]};
    margin-top: 32px;
    width: 100%;
    height: 64px;
    border-radius: 8px;
  }

  .sidebar-placeholder {
    background: ${({ theme }) => theme.palette.grey[100]};
    margin-top: 32px;
    width: 100%;
    height: 640px;
    border-radius: 16px;
  }
  
`;

export default GlobalStyle;
