import styled from 'styled-components';

const SignInForm = styled.div`
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
      .remember-checkbox {
        span:last-child {
          color: ${({ theme }) => theme.palette.grey[700]};;
        }
      }
    }
  }
`;

export const Styled = {
  SignInForm
};
