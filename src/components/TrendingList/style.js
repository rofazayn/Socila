import styled from 'styled-components';

const TrendingList = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
  margin-top: 24px;
  .trending-header {
    padding: 16px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }
  .trending-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
    &:last-of-type {
      border-bottom: none;
    }
    .trending-item-info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .ti-order {
        color: ${({ theme }) => theme.palette.grey[500]};
        margin-bottom: 4px;
        font-size: 11px;
      }
      .ti-shares {
        color: ${({ theme }) => theme.palette.grey[600]};
        margin-top: 4px;
      }
    }
  }
`;

export const Styled = {
  TrendingList,
};
