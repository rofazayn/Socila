import styled from 'styled-components';

const Navbar = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  max-width: 240px;
  width: 100%;
  /* background-color: papayawhip; */
  left: 0;
  bottom: 0;
  padding-top: 32px;
  padding-bottom: 32px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: space; */
  .navbar-top {
    .navbar-logo {
      margin-inline-start: 16px;
      margin-bottom: 48px;
    }
    .navbar-menu {
      /* margin-inline-start: 16px; */
      ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        li {
          margin-bottom: 8px;
          &:last-of-type {
            margin-bottom: 0;
          }
          a {
            font-size: 16px;
            display: flex;
            align-items: center;
            /* justify-content: center; */
            padding: 8px 16px;
            border-radius: 16px;
            .icon {
              margin-inline-end: 16px;
              /* background: pink; */
              display: flex;
              align-items: center;
              svg {
                width: 28px;
                height: 28px;
                color: black;
              }
            }
            &.active {
              color: ${({ theme }) => theme.palette.primary.main};
              .icon {
                svg {
                  color: ${({ theme }) => theme.palette.primary.main};
                  fill: ${({ theme }) => theme.palette.primary.main};
                }
              }
            }
          }
        }
      }
    }
  }
  .navbar-bot {
    .navbar-logout {
      font-size: 16px;
      display: flex;
      align-items: center;
      margin-inline-start: 16px;
      cursor: pointer;
      .icon {
        margin-inline-end: 16px;
        /* background: pink; */
        display: flex;
        align-items: center;
        svg {
          width: 24px;
          height: 24px;
          color: black;
        }
      }
    }
  }
`;

export const Styled = {
  Navbar
};
