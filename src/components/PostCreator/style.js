import styled from 'styled-components';

const PostCreator = styled.div`
  /* width: 100%; */
  margin: 8px 16px 0 16px;
  /* display: flex; */
  overflow: hidden;
  .form-wrapper {
    height: 144px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
    padding-bottom: 32px;
    .avatar {
      min-height: 64px;
      min-width: 64px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.palette.grey[200]};
      flex-grow: 1;
      margin-inline-end: 16px;
      border: 2px solid ${({ theme }) => theme.palette.grey[300]};
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 50%;
        height: 50%;
        margin: auto;
        fill: ${({ theme }) => theme.palette.grey[800]};
      }
    }
    form {
      display: flex;
      height: 100%;
      width: 100%;
      position: relative;
      /* padding-inline-start: 120px; */
      /* background: blue; */
      textarea {
        /* display: flex; */
        width: 100%;
        height: 100%;
        padding: 16px;
        background-color: ${({ theme }) => theme.palette.grey[100]};
        border: 2px solid ${({ theme }) => theme.palette.grey[100]};
        color: ${({ theme }) => theme.palette.grey[800]};
        border-radius: 16px;
        justify-content: flex-start;
        align-items: flex-start;
        outline: none;
        resize: none;
        font-size: 22px;
        transition: all 200ms ease-in-out;
        &::placeholder {
          color: ${({ theme }) => theme.palette.grey[400]};
        }
        &:focus {
          border: 2px solid ${({ theme }) => theme.palette.primary.main};
        }
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .submit-button {
        position: absolute;
        bottom: 8px;
        right: 8px;
        svg {
          fill: ${({ theme }) => theme.palette.grey[600]};
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

export const Styled = {
  PostCreator
};
