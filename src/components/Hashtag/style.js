import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hashtag = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;

  position: relative;
`;

export const Styled = {
  Hashtag,
};
