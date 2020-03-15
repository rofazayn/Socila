import styled from 'styled-components';

const PostPreview = styled.div`
  display: flex;
  padding: 24px 16px 16px 16px;
  /* border-radius: 8px; */
  transition: all 250ms ease-in-out;
  &:hover {
    /* cursor: pointer; */
    background: ${({ theme }) => theme.palette.grey[100]};
  }
  .post-section {
    display: flex;
    flex-direction: column;

    .post-header {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 8px;
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
          color: ${({ theme }) => theme.palette.grey[600]};
          text-decoration: underline;
        }
      }
      .time-posted {
        p {
          color: ${({ theme }) => theme.palette.grey[600]};
          /* text-decoration: underline; */
        }
      }
    }
    .post-body {
      p {
        color: ${({ theme }) => theme.palette.grey[800]};
      }
    }
    .post-footer {
      padding-top: 8px;
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
          &.love {
            button:hover {
              svg {
                fill: red;
              }
            }
          }
          &.comment {
            margin-inline-start: 16px;
            button:hover {
              svg {
                fill: blue;
              }
            }
          }
          &.share {
            button:hover {
              svg {
                fill: green;
              }
            }
          }
          button {
            margin-inline-end: 8px;
            color: ${({ theme }) => theme.palette.grey[700]};
            svg {
              width: 22px;
              height: 22px;
              fill: ${({ theme }) => theme.palette.grey[700]};
              transition: all ease-in-out 250ms;
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
`;

export const Styled = {
  PostPreview
};
