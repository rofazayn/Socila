import styled from 'styled-components';

const PostsList = styled.div`
  display: flex;
  /* padding-top: 16px; */
  padding-bottom: 20vh;
  flex-direction: column;
  .posts-fallback {
    width: 100%;
    padding: 48px 16px 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.no-posts {
      &.--end {
        margin-top: 36px;
      }
      p {
        color: ${({ theme }) => theme.palette.text.disabled};
      }
      svg {
        opacity: 50%;
        filter: grayscale(100%);
        width: 240px;
        height: auto;
        margin-bottom: 24px;
      }
    }
  }
`;

export const Styled = {
  PostsList
};
