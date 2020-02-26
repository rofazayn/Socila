import styled from 'styled-components';

const SignUpView = styled.main`
  min-height: 80vh;
  /* max-width: 360px; */
  margin: 0 auto;
  padding-top: 8vh;
  .auth-section {
    max-width: 320px;
    margin: 0 auto;
    .header-section {
    .header-text {
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
      text-align: center;
    }
  }
  .helper-section {
    margin: ${({ theme }) => `${theme.spacing(2)}px`} 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .helper-text {
      padding: .5rem;
      color: ${({ theme }) => theme.palette.grey[500]};
      text-align: center;
    }
  }
  }
  .illustration-section {
    text-align: center;
    width: 100%;
    margin-bottom: 5rem;
    svg {
      /* margin-top: ${({ theme }) => `${theme.spacing(2)}px`}; */
      width: 90vw;
      max-width: 450px;
      /* background: ${({ theme }) => theme.palette.primary.main}; */
    }
  }
`;

export const Styled = {
  SignUpView
};
