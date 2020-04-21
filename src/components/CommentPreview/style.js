import styled from 'styled-components';

const CommentPreview = styled.div`
  display: flex;
  padding: 24px 16px 16px 16px;
  margin-bottom: 8px;
  padding-inline-start: 40px;
  transition: all 250ms ease-in-out;
  /* border-inline-start: 2px solid transparent; */
  /* cursor: pointer; */
  &:hover {
    /* cursor: pointer; */
    background: ${({ theme }) => theme.palette.grey[50]};
    /* border-inline-start: 2px solid ${({ theme }) =>
      theme.palette.primary.light}; */
  }
  .comment-section {
    display: flex;
    flex-direction: column;
    &.details {
      width: 100%;
    }

    .comment-header {
      display: flex;
      flex-direction: row;
      /* align-items: center; */
      justify-content: space-between;
      margin-bottom: 8px;
      .header-section {
        display: flex;
        align-items: flex-start;
      }
      .spaced {
        padding-inline-end: 8px;
      }
      .author-name {
        p {
          font-weight: bold;
        }
      }
      .author-username {
        p {
          color: ${({ theme }) => theme.palette.text.disabled};
          text-decoration: underline;
        }
      }
      .time-commented {
        p {
          color: ${({ theme }) => theme.palette.text.disabled};
          /* text-decoration: underline; */
        }
      }
    }
    .comment-body {
      padding-inline-start: 64px;
      margin-top: -32px;
      p {
        color: ${({ theme }) => theme.palette.text.primary};
        line-height: 1.8;
      }
    }
    .comment-footer {
      padding-top: 16px;
      transform: translateX(-8px);
      padding-inline-start: 64px;
      .reactions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .reaction {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          
          .count {
            margin-inline-start: 8px;
            font-weight: bold;
            color: ${({ theme }) => theme.palette.text.secondary};
          }
          &.love {
            &.--liked {
              button {
                color: ${({ theme }) => theme.palette.primary.main};
                svg {
                  fill: ${({ theme }) => theme.palette.primary.main};
                }
              }
              .count {
                color: ${({ theme }) => theme.palette.primary.main};
                font-weight: bold;
              }
            }
            button:hover {
              svg {
                /* fill: red; */
              }
            }
          }
          &.comment {
            margin-inline-start: 16px;

            button:hover {
              svg {
                /* fill: blue; */
              }
            }
          }
          &.share {
            margin-inline-end: 16px;
            .count {
              margin-inline-end: 8px;
            }
            button:hover {
              svg {
                /* fill: green; */
              }
            }
          }
          
        }
        .reactions-group {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }

  .comment-dialog {
    .post-section {
      padding: 16px;
      background: red;
    }
  }
`;

export const Styled = {
  CommentPreview,
};
