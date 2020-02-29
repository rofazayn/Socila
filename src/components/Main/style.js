import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  .content {
    width: 100%;
    /* background: pink; */
    height: 2000px;
    min-width: 320px;
    border-inline-start: 1px solid ${({ theme }) => theme.palette.grey[200]};
    border-inline-end: 1px solid ${({ theme }) => theme.palette.grey[200]};
  }
  .sidebar {
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 440px;
    /* background: papayawhip; */
    height: 100vh;
  }
`;

export const Styled = {
  Main
};
