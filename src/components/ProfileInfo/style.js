import styled from 'styled-components';

const ProfileInfo = styled.div`
  display: flex;
  padding: 0 16px;
  /* background: red; */
  width: 100%;
  flex-direction: column;
  .profile-images {
    display: flex;
    width: 100%;
    height: 240px;
    position: relative;
    .cover {
      display: flex;
      background: ${({ theme }) => theme.palette.grey[100]};
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
  .profile-details {
    padding-inline-start: 48px;
    padding-inline-end: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 16px;
      padding-bottom: 8px;
      .name {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-inline-end: 16px;
        .full-name {
          margin-inline-end: 8px;
          color: ${({ theme }) => theme.palette.text.primary};
        }
        .username {
          /* text-decoration: underline; */
          color: ${({ theme }) => theme.palette.text.secondary};
        }
      }
      .rest {
        .joined {
          color: ${({ theme }) => theme.palette.text.disabled};
          span {
            color: ${({ theme }) => theme.palette.text.primary};
            font-weight: bold;
          }
        }
      }
    }
    .bio {
      padding-bottom: 8px;
      p {
        color: ${({ theme }) => theme.palette.text.primary};
      }
    }
  }
  .profile-actions {
    padding: 16px;
    padding-inline-start: 48px;
    padding-inline-end: 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .actions {
      button {
        margin-inline-end: 16px;
        &:last-of-type {
          margin-inline-end: 0;
        }
      }
    }
  }
`;

export const Styled = {
  ProfileInfo
};
