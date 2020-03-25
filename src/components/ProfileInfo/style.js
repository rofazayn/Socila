import styled from 'styled-components';

const ProfileInfo = styled.div`
  display: flex;
  padding: 16px;
  /* background: red; */
  width: 100%;
  .top {
    display: flex;
    width: 100%;
    height: 240px;
    position: relative;
    .cover {
      display: flex;
      background: pink;
      margin-inline-start: 48px;
      border-radius: 16px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        object-fit: cover;
        display: flex;
        width: 100%;
        height: auto;
      }
    }
    .pic {
      display: flex;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto 0;
      padding-top: 32px;
    }
  }
`;

export const Styled = {
  ProfileInfo
};
