import styled from 'styled-components';

const TextField = styled.div`
  display: flex;
  /* background: red; */
  flex-direction: column;

  .label {
    padding-bottom: 8px;
    .label-text {
      font-weight: 700;
      color: ${({ theme }) => theme.palette.grey[800]};
      font-family: 'Montserrat';
      transition: all ease-in-out 200ms;
    }
    &.--error {
      .label-text {
        color: ${({ theme }) => theme.palette.error.main};
      }
    }
  }

  .input {
    position: relative;
    margin-bottom: 16px;
    input {
      width: 100%;
      height: 48px;
      border-radius: 8px;
      padding: 0 16px;
      box-shadow: none;
      border: none;
      background: ${({ theme }) => theme.palette.grey[100]};
      color: black;
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
      outline: none;
      border: 3px solid transparent;
      transition: all 200ms ease-in-out;

      &::placeholder {
        color: ${({ theme }) => theme.palette.grey[400]};
      }

      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[200]};
        /* border-color: ${({ theme }) => theme.palette.grey[200]}; */
        &::placeholder {
          border-color: ${({ theme }) => theme.palette.grey[500]};
        }
      }

      &:focus {
        border: 3px solid ${({ theme }) => theme.palette.primary.main};
        ${(props) => props.error && `border-color: red`}
      }

      &[disabled],
      &:disabled {
        background-color: ${({ theme }) => theme.palette.grey[100]};
        color: ${({ theme }) => theme.palette.text.disabled};
        cursor: not-allowed;
        &:hover {
          background-color: ${({ theme }) => theme.palette.grey[100]};
        }
      }

      ${(props) => props.error && `border-color: red`}
    }
    .icon-end {
      display: flex;
      align-items: center;
      position: absolute;
      right: 16px;
      top: 0;
      bottom: 0;
      svg {
        fill: ${({ theme }) => theme.palette.grey[500]};
      }
    }
    &.fat {
      input {
        height: 56px;
      }
    }
    &.--error {
      margin-bottom: 0px;
    }
  }
  &.--error {
    .error-text {
      padding-top: 8px;
      color: ${({ theme }) => theme.palette.error.main};
      margin-bottom: 16px;
    }
  }
`;

export const Styled = { TextField };
