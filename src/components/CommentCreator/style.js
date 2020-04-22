import styled from 'styled-components';

const CommentCreator = styled.div`
  .comment-creator {
    padding: 0;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
          margin-inline-end: 8px;
        }
        p {
          font-weight: 700;
        }
      }
    }

    .inner {
      background: white;
      max-width: 580px;
      margin: auto;
      outline: none;
      .post-section {
        &.post {
          padding-bottom: 24px;
        }
        &.reply {
          display: flex;
          flex-direction: row;
          width: 100%;
          padding-bottom: 16px;
          .section {
            display: flex;
            &.avatar {
            }
            &.reply-form {
              flex-grow: 1;
              width: 100%;
              display: flex;
              .error-area {
                width: 100%;
                padding-bottom: 16px;
              }

              .form-wrapper {
                width: 100%;
                height: 160px;
                form {
                  display: flex;
                  height: 100%;
                  width: 100%;
                  position: relative;
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
                      background-color: ${({ theme }) =>
                        theme.palette.grey[200]};
                      border-color: ${({ theme }) => theme.palette.grey[200]};
                      &::placeholder {
                        border-color: ${({ theme }) => theme.palette.grey[500]};
                      }
                    }
                    &:focus {
                      border-color: ${({ theme }) =>
                        theme.palette.primary.main};
                    }

                    &::-webkit-scrollbar {
                      display: none;
                    }
                  }
                  .submit-button {
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                    .create-post-icon {
                      fill: ${({ theme }) => theme.palette.grey[600]};
                      width: 32px;
                      height: 32px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Styled = {
  CommentCreator,
};
