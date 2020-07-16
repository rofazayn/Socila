import styled from "styled-components";

const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 440px;
  /* background: papayawhip; */
  height: 100vh;
  overflow-y: scroll;
  padding-top: 32px;
  padding-inline-start: 16px;
  /* display: none; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Styled = {
  Sidebar,
};
