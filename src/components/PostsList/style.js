import styled from 'styled-components';

const PostsList = styled.div`
  display: flex;
  /* padding-top: 16px; */
  padding-bottom: 20vh;
  flex-direction: column;
  .posts-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    .no-posts {
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }
`;

export const Styled = {
  PostsList
};
