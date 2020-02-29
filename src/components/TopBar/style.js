import styled from 'styled-components';

const TopBar = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding-top: 32px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  z-index: 10;
  .page-title {
    font-size: 20px;
  }
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const Styled = {
  TopBar
};
