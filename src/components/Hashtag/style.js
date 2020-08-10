import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hashtag = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  transition: all ease-in-out 200ms;
  position: relative;
  &:hover {
    /* color: ${({ theme }) => theme.palette.primary.light}; */
    text-decoration: underline;
  }

  &.--uncolored {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const Styled = {
  Hashtag,
};
