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
      /* margin-inline-start: 48px; */
      border-radius: 16px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;

      .cover-change-button {
        position: absolute;
        bottom: 16px;
        right: 16px;
        opacity: 0;
        border-radius: 8px;
      }
      &:hover {
        .cover-change-button {
          opacity: 100%;
        }
      }
    }

    .pic {
      display: flex;
      position: absolute;
      top: 32px;
      /* bottom: 0; */
      left: 24px;
      margin: auto 0;
      .profile-change-button {
        position: absolute;
        top: 64px;
        left: 64px;
        opacity: 0;
        border-radius: 100%;
        padding: 8px;
        svg {
          margin: 0;
          padding: 0;
        }
      }
      &:hover {
        .profile-change-button {
          opacity: 100%;
        }
      }
    }
  }
  .profile-details {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
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
        color: ${({ theme }) => theme.palette.text.secondary};
      }
    }
  }
  .profile-actions {
    padding: 16px 0;
    /* padding-inline-start: 16px; */
    /* padding-inline-end: 0; */
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
  ProfileInfo,
};
