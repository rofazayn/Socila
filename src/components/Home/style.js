import styled from 'styled-components';

const Home = styled.div`
  position: relative;
  height: 100%;
  .content-top {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    padding-top: 32px;
    margin-inline-start: 16px;
    margin-inline-end: 16px;
    padding-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
    .page-title {
      font-size: 20px;
    }
    svg {
      width: 28px;
      height: 28px;
      /* background: red; */
    }
  }
`;

export const Styled = {
  Home
};
