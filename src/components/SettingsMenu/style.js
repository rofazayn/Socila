import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SettingsMenu = styled.div`
  border-radius: 16px;
  /* padding: 16px; */
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  /* padding-bottom: 8px; */
  background-color: ${({ theme }) => theme.palette.grey[100]};
`;

const SettingsMenuHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  overflow: hidden;
`;

const SettingsMenuBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingsMenuItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 2px dashed transparent;
  border-left: 2px dashed transparent;
  border-right: 2px dashed transparent;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  padding: 12px 16px;
  margin-bottom: 0;
  transition: all ease-in-out 200ms;
  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
  &:first-of-type {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  &:last-of-type {
    border-bottom-color: transparent;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &.active {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.primary.background};
    border: 2px dashed ${({ theme }) => theme.palette.primary.main};
    .info {
      .label {
        margin-bottom: 2px;
        font-weight: 700;
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
    .action {
      button {
        svg {
          fill: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }
  .info {
    .label {
      font-weight: 700;
      &.--danger {
        color: ${({ theme }) => theme.palette.error.main};
      }
    }
    .data {
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
  .action {
    &.--danger {
      button {
        svg {
          fill: ${({ theme }) => theme.palette.error.main};
        }
      }
    }
  }
`;

export const Styled = {
  SettingsMenu,
  SettingsMenuHeader,
  SettingsMenuBody,
  SettingsMenuItem,
};
