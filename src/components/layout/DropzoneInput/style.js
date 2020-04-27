import styled from 'styled-components';

const Dropzone = styled.div`
  outline: none;
  input {
    outline: none;
  }
  .inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 260px;
    align-items: center;
    justify-content: center;
    border: 5px dashed ${({ theme }) => theme.palette.grey[500]};
    border-radius: 8px;
    transition: all ease-in-out 200ms;
    cursor: pointer;
    /* margin-bottom: 16px; */

    svg {
      margin-bottom: 16px;
      width: 48px;
      height: 48px;
      fill: ${({ theme }) => theme.palette.grey[500]};
      transition: all ease-in-out 200ms;
    }

    &:hover,
    &.--active {
      border-color: ${({ theme }) => theme.palette.primary.main};
      svg {
        fill: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const Styled = {
  Dropzone,
};
