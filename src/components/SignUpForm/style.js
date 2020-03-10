import styled from 'styled-components';

const SignUpForm = styled.div`
  /* background: papayawhip; */
  form {
    display: grid;
    grid-column: 1fr;
    grid-row-gap: 1rem;
    /* max-width: ${({ theme }) => `${theme.spacing(40)}px`}; */
    .form-controlers {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .name-group {
        display: flex;
      }
      .remember-checkbox {
        span:last-child {
          color: ${({ theme }) => theme.palette.grey[700]};
          font-size: 14px;
          /* background: red; */
        }
      }
    }
  }
`;

export const Styled = {
  SignUpForm
};
