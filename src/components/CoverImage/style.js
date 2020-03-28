import styled from 'styled-components';

const CoverImage = styled.div`
  position: relative;
  width: 100%;
  img {
    object-fit: cover;
    display: flex;
    width: 100%;
    height: auto;
  }
  .no-cover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    svg {
      width: 80px;
      height: 80px;
      fill: ${({ theme }) => theme.palette.grey[300]};
    }
    p {
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }
`;

export const Styled = {
  CoverImage
};
