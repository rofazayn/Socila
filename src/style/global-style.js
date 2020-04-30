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
    background: ${({ theme }) => theme.palette.grey[100]};
    /* opacity: 10%; */
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

  .fancy-button {
    /* margin-inline-end: 8px; */
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.grey[200]};
    border: 2px solid transparent;
    padding: 6px 12px;
    transition: all ease-in-out 200ms;
    font-size: 14px;

    &[disabled], &:disabled {
      svg {
        fill: ${({ theme }) => theme.palette.grey[400]};
      }
    }
    

    .count {
      font-weight: bold;
      padding-inline-end: 8px;
    }

    svg {
      width: 18px;
      height: 18px;
      fill: ${({ theme }) => theme.palette.text.primary};
      transition: all ease-in-out 200ms;
    }
      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
        border-color: ${({ theme }) => theme.palette.primary.main};
        background-color: ${({ theme }) => theme.palette.grey[200]};
        svg {
          fill: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
    &.--active {
      color: ${({ theme }) => theme.palette.primary.main};
      border-color: ${({ theme }) => theme.palette.primary.main};
      background-color: ${({ theme }) => theme.palette.grey[200]};
      svg {
        fill: ${({ theme }) => theme.palette.primary.main};
      }
    }

    &.--following {
     &:hover {
      color: ${({ theme }) => theme.palette.error.main};
      border-color: ${({ theme }) => theme.palette.error.main};
      background-color: ${({ theme }) => theme.palette.grey[200]};
      svg {
        fill: ${({ theme }) => theme.palette.error.main};
      }
     }
    }

    .--contained {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
      svg {
        fill: white;
      }
      &:hover {
        background-color: ${({ theme }) => theme.palette.primary.dark}
      }
    }
    

    .posts-fallback {
    width: 100%;
    padding: 48px 16px 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.no-posts {
      &.--end {
        margin-top: 36px;
      }
      p {
        color: ${({ theme }) => theme.palette.text.disabled};
      }
      svg {
        opacity: 50%;
        filter: grayscale(100%);
        width: 240px;
        height: auto;
        margin-bottom: 24px;
      }
    }
  }

  .--disabled-text {
    color: ${({ theme }) => theme.palette.text.disabled};
  }

  .mui-fixed {
  /*
   * make sure that added right padding
   * actually pushes contents to the left
   */
  box-sizing: border-box;
  padding: 0;
}

.creator {
  padding: 16px;
    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8px;
      border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
      .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
          margin-inline-end: 8px;
          fill: ${({ theme }) => theme.palette.primary.main};
        }
        p {
          font-weight: 700;
        }
      }
    }
    .dialog-content {
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      .cropper {
        height: 380px;
        width: 100%;
        overflow: hidden;
      }
    }
    .dialog-footer {
      display: flex;
      justify-content: space-between;
      padding-top: 8px;
      border-top: 1px solid ${({ theme }) => theme.palette.grey[200]};
    }
  }
`;

export default GlobalStyle;
