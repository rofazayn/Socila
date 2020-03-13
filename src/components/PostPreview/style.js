import styled from 'styled-components';

const PostPreview = styled.div`
  display: flex;
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
  }
`;

export const Styled = {
  PostPreview
};
