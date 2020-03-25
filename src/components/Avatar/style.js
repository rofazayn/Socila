import styled from 'styled-components';

const Avatar = styled.div`
  display: inline-flex;
  min-height: ${({ size }) => (size ? size : '64px')};
  min-width: ${({ size }) => (size ? size : '64px')};
  max-width: ${({ size }) => (size ? size : '64px')};
  max-height: ${({ size }) => (size ? size : '64px')};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  margin-inline-end: 16px;
  border: 2px solid ${({ theme }) => theme.palette.grey[300]};
  position: relative;
  overflow: hidden;
  svg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    margin: auto;
    fill: ${({ theme }) => theme.palette.grey[800]};
  }
  img {
    /* object-fit: cover; */
    /* object-position: center center; */
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    /* height: 100%; */
    margin: auto;
    display: flex;
  }
`;

export const Styled = {
  Avatar
};
