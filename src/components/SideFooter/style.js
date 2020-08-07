import styled from 'styled-components';

const SideFooter = styled.footer`
  padding: 16px;
  ul {
    display: flex;
    list-style: none;
    li {
      a {
        padding: 0 8px;
        color: ${({ theme }) => theme.palette.text.hint};
        transition: color ease-in-out 200ms;
        &:hover {
          color: ${({ theme }) => theme.palette.text.primary};
        }
      }
    }
  }
`;

export const Styled = {
  SideFooter,
};
