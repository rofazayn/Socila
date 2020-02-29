import styled from 'styled-components';

const OfflineNavbar = styled.nav`
  padding: 2rem 0;
  .inner-w {
    /* background: pink; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .logo {
    }
    .menu {
      ul {
        display: flex;
        list-style: none;
        li {
          a,
          .logout-button {
            display: flex;
            padding: 0.5rem 1rem;
            font-weight: 700;
            color: ${({ theme }) => theme.palette.grey[500]};
            &.active {
              color: ${({ theme }) => theme.palette.common.black};
            }
          }
          .logout-button {
            cursor: pointer;
            color: ${({ theme }) => theme.palette.common.black};
          }
        }
      }
    }
  }
`;

export const Styled = {
  OfflineNavbar
};
