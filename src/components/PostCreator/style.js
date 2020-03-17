import styled from 'styled-components';

const PostCreator = styled.div`
  /* width: 100%; */
  margin: 8px 16px 0 16px;
  /* display: flex; */
  overflow: hidden;
  .form-wrapper {
    height: 160px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
    padding-bottom: 32px;
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
        padding-inline-end: 64px;
        background-color: ${({ theme }) => theme.palette.grey[100]};
        border: 3px solid ${({ theme }) => theme.palette.grey[100]};
        color: ${({ theme }) => theme.palette.text.primary};
        border-radius: 16px;
        justify-content: flex-start;
        align-items: flex-start;
        outline: none;
        resize: none;
        font-size: 22px;
        transition: all 200ms ease-in-out;
        &::placeholder {
          color: ${({ theme }) => theme.palette.grey[400]};
          transition: all 200ms ease-in-out;
        }
        &:hover {
          background-color: ${({ theme }) => theme.palette.grey[200]};
          border-color: ${({ theme }) => theme.palette.grey[200]};
          &::placeholder {
            border-color: ${({ theme }) => theme.palette.grey[500]};
          }
        }
        &:focus {
          border-color: ${({ theme }) => theme.palette.primary.main};
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
