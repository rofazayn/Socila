import styled from 'styled-components';

const TopBar = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding-top: 32px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  clip-path: inset(0 0 -500px 0);
  z-index: 10;
  transition: box-shadow ease-in-out 200ms;
  &.--initial-bordered {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]} !important;
  }
  &.--moved {
    box-shadow: 0 0 30px 0 ${({ theme }) => theme.palette.grey[300]};
  }
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
