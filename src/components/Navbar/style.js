import styled from 'styled-components';

const Navbar = styled.nav`
  position: absolute;
  max-width: 240px;
  width: 100%;
  /* background-color: papayawhip; */
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 32px;
  padding-bottom: 32px;
  height: 100%;
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
            display: flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 16px;
            /* background: rgba(0, 0, 0, 0.5); */
            box-icon {
              margin-inline-end: 16px;
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }
  .navbar-bot {
    .navbar-logout {
      display: flex;
      align-items: center;
      margin-inline-start: 16px;
      cursor: pointer;
      box-icon {
        margin-inline-end: 16px;
        width: 28px;
        height: 28px;
      }
    }
  }
`;

export const Styled = {
  Navbar
};
