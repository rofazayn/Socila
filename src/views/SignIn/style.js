import styled from 'styled-components';

const SignInView = styled.main`
  max-width: 400px;
  margin: 0 auto;
  .header-section {
    .header-text {
      margin-bottom: ${({ theme }) => `${theme.spacing(3)}px`};
      text-align: center;
    }
  }
  .helper-section {
    margin: ${({ theme }) => `${theme.spacing(4)}px`} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .helper-text {
      color: ${({ theme }) => theme.palette.grey[500]};
      text-align: center;
    }
  }
  .illustration-section {
    text-align: center;
    svg {
      width: 120%;
    }
  }
`;

export const Styled = {
  SignInView
};
