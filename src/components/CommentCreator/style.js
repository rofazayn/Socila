import styled from 'styled-components';

const CommentCreator = styled.div`
  .comment-creator {
      padding: 16px;
      padding-top: 64px;

    .post-section {
      /* border: 1px solid ${({ theme }) => theme.palette.primary.main}; */
      background: white;
      padding: 16px;
      border-radius: 8px;
      max-width: 580px;
      margin: auto;
      outline: none;
      p {

        text-decoration: none !important;
      }
    }
  }  
`;

export const Styled = {
  CommentCreator,
};
