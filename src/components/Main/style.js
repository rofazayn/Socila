import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  .content {
    width: 100%;
    background: pink;
    height: 2000px;
  }
  .sidebar {
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 400px;
    background: papayawhip;
    height: 100vh;
  }
`;

export const Styled = {
  Main
};
